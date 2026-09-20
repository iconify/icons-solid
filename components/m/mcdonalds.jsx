import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrxpgubkr.css';

const viewBox = {"width":272.7,"height":238.5};
const content = `<path class="nrxpgubkr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:mcdonalds"} {...others} />);
}

export default Component;
