import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t3-262yry.css';
import '../../css/g/gko5xubta.css';
import '../../css/z/z4aussgpu.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="t3-262yry"/><path class="gko5xubta"/><path clip-rule="evenodd" class="z4aussgpu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:archive-box-flat"} {...others} />);
}

export default Component;
