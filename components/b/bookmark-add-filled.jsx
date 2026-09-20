import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e9penwvtt.css';
import '../../css/v/vcmvgqgbw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="e9penwvtt"/><path class="vcmvgqgbw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:bookmark-add-filled"} {...others} />);
}

export default Component;
