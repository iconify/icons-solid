import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/yue559bgm.css';
import '../../css/u/uo6__lbiq.css';
import '../../css/g/gshkn9qqt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="yue559bgm"/><path class="uo6__lbiq"/><path class="gshkn9qqt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:move-circle-line-duotone"} {...others} />);
}

export default Component;
