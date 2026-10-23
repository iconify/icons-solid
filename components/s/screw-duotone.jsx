import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tkb1vr54i.css';
import '../../css/h/h88dnnzlp.css';
import '../../css/x/xa703b19s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="tkb1vr54i"/><path class="h88dnnzlp"/><path class="xa703b19s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:screw-duotone"} {...others} />);
}

export default Component;
