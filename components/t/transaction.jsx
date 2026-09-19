import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/r/r7zmk6dmj.css';
import '../../css/a/ae8_d9ber.css';
import '../../css/c/c4sbe-bgb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="r7zmk6dmj"/><path class="ae8_d9ber"/><path class="c4sbe-bgb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:transaction"} {...others} />);
}

export default Component;
