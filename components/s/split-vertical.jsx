import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xz1j1t8jz.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="xz1j1t8jz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:split-vertical"} {...others} />);
}

export default Component;
