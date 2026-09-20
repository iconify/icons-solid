import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vcmvgqgbw.css';
import '../../css/s/sc6d7r8ls.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vcmvgqgbw"/><path class="sc6d7r8ls"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:bookmark-minus-filled"} {...others} />);
}

export default Component;
