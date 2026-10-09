import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ltlzg8bzb.css';
import '../../css/f/fqe-2wb1s.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ltlzg8bzb"/><path class="fqe-2wb1s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:wifi-low-20-bold"} {...others} />);
}

export default Component;
