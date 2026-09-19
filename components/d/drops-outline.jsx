import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/o/otizujbvg.css';
import '../../css/d/dmbuntb5b.css';
import '../../css/g/gxh6gnbgw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="otizujbvg"/><path class="dmbuntb5b"/><path class="gxh6gnbgw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:drops-outline"} {...others} />);
}

export default Component;
