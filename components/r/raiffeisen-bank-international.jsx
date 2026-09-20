import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pya87gw1z.css';
import '../../css/n/n3i7v162d.css';

const viewBox = {"width":316.938,"height":88.999,"left":-2.519,"top":-2.519};
const content = `<path class="pya87gw1z"/><path class="n3i7v162d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:raiffeisen-bank-international"} {...others} />);
}

export default Component;
