import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/htvtr349e.css';
import '../../css/d/d7idsl_yo.css';
import '../../css/o/o2je8sbfw.css';
import '../../css/g/gis2gm51z.css';
import '../../css/s/si1l09bzp.css';
import '../../css/q/qpt2n5m_u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="htvtr349e"/><path class="d7idsl_yo"/><circle transform="rotate(-45 9.172 12)" class="o2je8sbfw"/><circle transform="rotate(-45 12 14.829)" class="gis2gm51z"/><circle transform="rotate(-45 12 9.171)" class="si1l09bzp"/><circle transform="rotate(-45 14.828 12)" class="qpt2n5m_u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:bandage2-duotone"} {...others} />);
}

export default Component;
