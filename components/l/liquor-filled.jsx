import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f7x8jdbrz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="f7x8jdbrz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:liquor-filled"} {...others} />);
}

export default Component;
