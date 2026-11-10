import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/r/rge-o4bqm.css';
import '../../css/f/f0o6t-o3z.css';
import '../../css/x/x6lifdc4z.css';
import '../../css/y/yddg_1e9n.css';
import '../../css/j/jwwpslqlg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="rge-o4bqm"/><path class="f0o6t-o3z"/><path class="x6lifdc4z"/><path class="yddg_1e9n"/><path class="jwwpslqlg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:bowl"} {...others} />);
}

export default Component;
