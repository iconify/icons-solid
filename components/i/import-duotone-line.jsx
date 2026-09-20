import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xquxmub6v.css';
import '../../css/e/e3qz8_40h.css';
import '../../css/y/ypaszccgp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect class="xquxmub6v"/><path class="e3qz8_40h"/><path class="ypaszccgp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:import-duotone-line"} {...others} />);
}

export default Component;
