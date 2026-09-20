import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zheynwbwf.css';
import '../../css/p/pr7drww8h.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="zheynwbwf"/><path class="pr7drww8h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:design-color-spray"} {...others} />);
}

export default Component;
