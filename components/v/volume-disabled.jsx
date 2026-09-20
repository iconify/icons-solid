import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1pi9x57x.css';

const viewBox = {"width":21,"height":21};
const content = `<path class="n1pi9x57x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:volume-disabled"} {...others} />);
}

export default Component;
