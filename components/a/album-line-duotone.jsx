import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/vnsop5_4w.css';
import '../../css/e/ea_31gbnm.css';
import '../../css/o/o7cgxubkk.css';
import '../../css/d/dtjl_kbzo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="vnsop5_4w"/><path class="ea_31gbnm"/><circle class="o7cgxubkk"/><path class="dtjl_kbzo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:album-line-duotone"} {...others} />);
}

export default Component;
