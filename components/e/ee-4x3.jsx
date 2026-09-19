import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wv-nxjz8c.css';
import '../../css/j/j-gf9ybzc.css';
import '../../css/d/d20s0p7uf.css';

const viewBox = {"width":640,"height":480};
const content = `<path class="wv-nxjz8c"/><path class="j-gf9ybzc"/><path class="d20s0p7uf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:ee-4x3"} {...others} />);
}

export default Component;
