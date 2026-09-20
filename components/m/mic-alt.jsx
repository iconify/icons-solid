import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/g/gvf8_1bhd.css';
import '../../css/g/g2y24gmro.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><rect class="gvf8_1bhd"/><path class="g2y24gmro"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:mic-alt"} {...others} />);
}

export default Component;
