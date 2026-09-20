import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kikd5sbwv.css';
import '../../css/z/zivuh0bnl.css';
import '../../css/n/n-dw8obgu.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="kikd5sbwv"/><path class="zivuh0bnl"/><path class="n-dw8obgu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:mouse"} {...others} />);
}

export default Component;
