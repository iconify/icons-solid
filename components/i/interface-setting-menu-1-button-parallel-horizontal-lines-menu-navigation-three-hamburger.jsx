import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vyjr1g5qu.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="vyjr1g5qu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-setting-menu-1-button-parallel-horizontal-lines-menu-navigation-three-hamburger"} {...others} />);
}

export default Component;
