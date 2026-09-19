import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t-8kcn42z.css';

const viewBox = {"width":80,"height":80};
const content = `<path class="t-8kcn42z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:underline-outline"} {...others} />);
}

export default Component;
