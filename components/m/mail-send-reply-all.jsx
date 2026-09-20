import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xkyxzwb9q.css';
import '../../css/o/ocl2j5bxo.css';
import '../../css/t/tu4szacyi.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="xkyxzwb9q"><path class="ocl2j5bxo"/><path class="tu4szacyi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:mail-send-reply-all"} {...others} />);
}

export default Component;
