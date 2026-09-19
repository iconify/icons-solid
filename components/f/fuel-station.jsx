import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/a/a2g9elbyt.css';
import '../../css/o/ootkfz6rc.css';
import '../../css/z/zw-iqyb4p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="a2g9elbyt"/><path class="ootkfz6rc"/><path class="zw-iqyb4p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:fuel-station"} {...others} />);
}

export default Component;
