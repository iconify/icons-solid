import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tdg-jhb7z.css';
import '../../css/i/iz9lg-b_o.css';
import '../../css/z/zfepqbc3e.css';
import '../../css/z/zqalz-5cg.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="tdg-jhb7z"/><path class="iz9lg-b_o"/><path class="zfepqbc3e"/><path class="zqalz-5cg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:man-frowning"} {...others} />);
}

export default Component;
