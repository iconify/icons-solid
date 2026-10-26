import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/coj7f6n0h.css';

const viewBox = {"width":220.61,"height":173.65};
const content = `<path class="coj7f6n0h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:karmada"} {...others} />);
}

export default Component;
