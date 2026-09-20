import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bu-67tbwi.css';
import '../../css/i/i5_v47u8g.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="bu-67tbwi"/><path class="i5_v47u8g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:interface-essential-text-input-area-3"} {...others} />);
}

export default Component;
