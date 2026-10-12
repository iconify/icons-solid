import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ugllttbdv.css';
import '../../css/g/grr59qbyf.css';
import '../../css/p/p4v-tgbyg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect class="ugllttbdv"/><path class="grr59qbyf"/><path class="p4v-tgbyg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:usb-warning"} {...others} />);
}

export default Component;
