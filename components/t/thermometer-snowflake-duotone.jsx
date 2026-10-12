import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zewt6pbzu.css';
import '../../css/m/m6mj_obaa.css';
import '../../css/p/pnmyt_1ej.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="zewt6pbzu"/><path class="m6mj_obaa"/><path class="pnmyt_1ej"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:thermometer-snowflake-duotone"} {...others} />);
}

export default Component;
