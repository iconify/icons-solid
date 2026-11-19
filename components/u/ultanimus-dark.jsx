import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fxi2z2bbm.css';
import '../../css/n/nlc3y1j7j.css';

const viewBox = {"width":18,"height":20,"left":3,"top":2};
const content = `<path class="fxi2z2bbm"/><circle class="nlc3y1j7j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:ultanimus-dark"} {...others} />);
}

export default Component;
