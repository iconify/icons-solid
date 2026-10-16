import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tpa8bqtln.css';

const viewBox = {"width":440.71,"height":440.63,"left":36.13,"top":36.34};
const content = `<path class="tpa8bqtln"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:ryot-dark"} {...others} />);
}

export default Component;
