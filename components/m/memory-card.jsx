import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pij_c5y_o.css';
import '../../css/g/g6bv-gb_k.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pij_c5y_o"/><path class="g6bv-gb_k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:memory-card"} {...others} />);
}

export default Component;
