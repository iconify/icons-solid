import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ix49lsb0a.css';
import '../../css/n/nmakc7bpn.css';
import '../../css/f/f6as21l_m.css';
import '../../css/i/i3atnibub.css';
import '../../css/g/gl1-mrb0b.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="ix49lsb0a"/><path class="nmakc7bpn"/><path class="f6as21l_m"/><path class="i3atnibub"/><path class="gl1-mrb0b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:eyes"} {...others} />);
}

export default Component;
