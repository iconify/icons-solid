import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fi0ujv19g.css';
import '../../css/d/dsd46tcgx.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="fi0ujv19g"/><path class="dsd46tcgx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:interface-essential-bin"} {...others} />);
}

export default Component;
