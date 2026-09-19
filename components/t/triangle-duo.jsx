import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cg23gwpnq.css';

const viewBox = {"width":80,"height":80};
const content = `<path class="cg23gwpnq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:triangle-duo"} {...others} />);
}

export default Component;
