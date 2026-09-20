import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h7jtw93ax.css';
import '../../css/z/zgc-jzu5e.css';
import '../../css/o/oawpsxb-v.css';
import '../../css/o/o38dyhlqw.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="h7jtw93ax"/><path class="zgc-jzu5e"/><path clip-rule="evenodd" class="oawpsxb-v"/><path clip-rule="evenodd" class="o38dyhlqw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:threat-phone-flat"} {...others} />);
}

export default Component;
