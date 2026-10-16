import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pufzx1blr.css';

const viewBox = {"width":440.71,"height":440.63,"left":36.13,"top":36.34};
const content = `<path class="pufzx1blr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:ryot-light"} {...others} />);
}

export default Component;
