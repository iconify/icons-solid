import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/t/th2y3uo2c.css';
import '../../css/h/h7cptgbny.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="th2y3uo2c"/><path class="h7cptgbny"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:headphones-sharp-two-tone"} {...others} />);
}

export default Component;
