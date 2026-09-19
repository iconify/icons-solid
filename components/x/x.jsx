import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/h/hploe513r.css';
import '../../css/g/gg0h25fqi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="hploe513r"/><path class="gg0h25fqi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:x"} {...others} />);
}

export default Component;
