import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/r4es2h2kv.css';
import '../../css/w/w3grf8bog.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="r4es2h2kv"/><path class="w3grf8bog wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:hand-heart-solid"} {...others} />);
}

export default Component;
