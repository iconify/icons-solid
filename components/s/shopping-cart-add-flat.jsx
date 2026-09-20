import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/htvvvebia.css';
import '../../css/l/l3utkjbgv.css';
import '../../css/y/yfuy3-bir.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="htvvvebia"/><path class="l3utkjbgv"/><path clip-rule="evenodd" class="yfuy3-bir"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:shopping-cart-add-flat"} {...others} />);
}

export default Component;
