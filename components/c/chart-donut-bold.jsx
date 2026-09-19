import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/as4yz9_fq.css';

const viewBox = {"width":80,"height":80};
const content = `<path class="as4yz9_fq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:chart-donut-bold"} {...others} />);
}

export default Component;
