import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/r/rq8p0hbxp.css';
import '../../css/s/saavl5qcz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="rq8p0hbxp"/><path class="saavl5qcz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:bolt-one"} {...others} />);
}

export default Component;
