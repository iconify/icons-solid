import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/du8dgffkn.css';
import '../../css/m/m0gaflbql.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="du8dgffkn"/><path class="m0gaflbql"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:interface-essential-battery"} {...others} />);
}

export default Component;
