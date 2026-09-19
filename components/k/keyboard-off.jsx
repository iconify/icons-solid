import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/joxwt1bet.css';
import '../../css/k/kdd-004ir.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="joxwt1bet"/><path class="kdd-004ir"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:keyboard-off"} {...others} />);
}

export default Component;
