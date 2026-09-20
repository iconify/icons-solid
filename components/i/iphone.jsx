import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cb8sfdc_g.css';
import '../../css/n/njg0o2b3b.css';
import '../../css/k/kjwajrycf.css';
import '../../css/f/fokxt-bfd.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="cb8sfdc_g"/><path class="njg0o2b3b"/><path class="kjwajrycf"/><path class="fokxt-bfd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:iphone"} {...others} />);
}

export default Component;
