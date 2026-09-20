import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c64022b1f.css';
import '../../css/g/g2rcx6i-o.css';
import '../../css/i/i5vl1gfpx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c64022b1f"/><rect class="g2rcx6i-o"/><path class="i5vl1gfpx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:vector-square-alt"} {...others} />);
}

export default Component;
