import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/x/xm3as_bdr.css';
import '../../css/g/gokw35m3p.css';
import '../../css/r/re9a3j93t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="xm3as_bdr"/><path class="gokw35m3p"/><path class="re9a3j93t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:screen-add-to-home"} {...others} />);
}

export default Component;
