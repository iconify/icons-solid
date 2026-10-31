import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a76k91d3g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a76k91d3g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:unfold-less-horizontal-bulk-round"} {...others} />);
}

export default Component;
