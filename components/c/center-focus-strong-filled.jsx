import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w33y4mbzr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w33y4mbzr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:center-focus-strong-filled"} {...others} />);
}

export default Component;
