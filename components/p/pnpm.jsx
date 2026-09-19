import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a2bteufbr.css';
import '../../css/p/p26pkt_uv.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="a2bteufbr"/><path class="p26pkt_uv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:pnpm"} {...others} />);
}

export default Component;
