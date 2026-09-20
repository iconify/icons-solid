import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fgrpdcbuo.css';
import '../../css/z/zl1t5ibdr.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="fgrpdcbuo"/><path class="zl1t5ibdr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:phone-signal-full"} {...others} />);
}

export default Component;
