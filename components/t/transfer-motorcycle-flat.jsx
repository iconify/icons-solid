import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y6c2njxfw.css';
import '../../css/f/fblcspbrj.css';
import '../../css/z/zm1iwwu3y.css';
import '../../css/s/svisg_bqo.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="y6c2njxfw"/><path clip-rule="evenodd" class="fblcspbrj"/><path clip-rule="evenodd" class="zm1iwwu3y"/><path class="svisg_bqo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:transfer-motorcycle-flat"} {...others} />);
}

export default Component;
