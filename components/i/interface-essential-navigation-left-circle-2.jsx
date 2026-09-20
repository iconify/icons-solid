import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uckz_1f4d.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="uckz_1f4d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:interface-essential-navigation-left-circle-2"} {...others} />);
}

export default Component;
