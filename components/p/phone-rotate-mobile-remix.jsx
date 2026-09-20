import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ygs9l0b8p.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="ygs9l0b8p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:phone-rotate-mobile-remix"} {...others} />);
}

export default Component;
