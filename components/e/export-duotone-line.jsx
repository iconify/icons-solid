import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wnh7raclo.css';
import '../../css/y/ypaszccgp.css';
import '../../css/x/xquxmub6v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wnh7raclo"/><path class="ypaszccgp"/><rect class="xquxmub6v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:export-duotone-line"} {...others} />);
}

export default Component;
