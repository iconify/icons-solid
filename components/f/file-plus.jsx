import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/s/s_8f41qkd.css';
import '../../css/r/rlvt8hb4n.css';
import '../../css/q/q1antqapf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="s_8f41qkd"/><path class="rlvt8hb4n"/><path class="q1antqapf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:file-plus"} {...others} />);
}

export default Component;
