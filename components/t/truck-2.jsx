import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/e/exo9z_3pw.css';
import '../../css/i/iegx5_a4f.css';
import '../../css/g/g5piw_hje.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="exo9z_3pw"/><path class="iegx5_a4f"/><path class="g5piw_hje"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:truck-2"} {...others} />);
}

export default Component;
