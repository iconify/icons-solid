import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k72n5nozh.css';
import '../../css/r/rx2bfymsc.css';
import '../../css/h/h431z4bkn.css';
import '../../css/e/essb--blr.css';
import '../../css/p/p-u6dgbci.css';
import '../../css/s/s114ebbdj.css';
import '../../css/l/llvmg5xip.css';
import '../../css/d/dfmxe9bpl.css';
import '../../css/h/ho11vbc9o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="k72n5nozh wm-shadow"/><path class="rx2bfymsc wm-shadow"/><path class="h431z4bkn"/><path class="essb--blr"/><path class="p-u6dgbci"/><path class="s114ebbdj"/><path class="llvmg5xip wm-shine"/><path class="dfmxe9bpl wm-shine"/><path class="ho11vbc9o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:swap"} {...others} />);
}

export default Component;
