import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yvd61yb8z.css';
import '../../css/f/fd4laftzm.css';
import '../../css/i/iic6-gxyp.css';
import '../../css/w/wzw7k-iny.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="yvd61yb8z"/><path class="fd4laftzm"/><path class="iic6-gxyp"/><path class="wzw7k-iny"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:dark-dislay-mode"} {...others} />);
}

export default Component;
