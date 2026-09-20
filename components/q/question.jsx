import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/a/a6z4ynb6v.css';
import '../../css/f/fqf74lb2o.css';
import '../../css/v/v39n78vsr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><circle class="a6z4ynb6v"/><circle class="fqf74lb2o"/><path class="v39n78vsr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:question"} {...others} />);
}

export default Component;
