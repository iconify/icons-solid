import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c8x1q1cuv.css';
import '../../css/a/aw90g_bjq.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="c8x1q1cuv"/><path class="aw90g_bjq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:real-estate-building-ad"} {...others} />);
}

export default Component;
