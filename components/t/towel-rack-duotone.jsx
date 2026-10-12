import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/etqo8mbsk.css';
import '../../css/b/b85ermbzw.css';
import '../../css/q/q0guxfcfg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="etqo8mbsk"/><path class="b85ermbzw"/><path class="q0guxfcfg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:towel-rack-duotone"} {...others} />);
}

export default Component;
