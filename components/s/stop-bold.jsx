import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kk_1t8jzv.css';

const viewBox = {"width":80,"height":80};
const content = `<rect class="kk_1t8jzv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:stop-bold"} {...others} />);
}

export default Component;
