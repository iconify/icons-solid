import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oiv-hu0xx.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="oiv-hu0xx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"subway:euro"} {...others} />);
}

export default Component;
