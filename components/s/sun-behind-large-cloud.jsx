import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h-_--fsoi.css';
import '../../css/j/j6i4onbld.css';
import '../../css/e/enk7wwm3a.css';
import '../../css/r/rpvb-o6bq.css';
import '../../css/b/b-34arh6n.css';
import '../../css/x/xr454ubku.css';
import '../../css/j/j99mzacih.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="h-_--fsoi"/><path class="j6i4onbld"/><path class="enk7wwm3a"/><g class="rpvb-o6bq"><path class="b-34arh6n"/><path class="xr454ubku"/><path class="j99mzacih"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:sun-behind-large-cloud"} {...others} />);
}

export default Component;
