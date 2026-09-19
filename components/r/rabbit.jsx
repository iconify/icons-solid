import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nu-xanbpn.css';
import '../../css/p/pbsi8cc2n.css';
import '../../css/l/l7mgxrb6w.css';
import '../../css/l/lx0r7ilym.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="nu-xanbpn"/><path class="pbsi8cc2n"/><path class="l7mgxrb6w"/><path class="lx0r7ilym"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:rabbit"} {...others} />);
}

export default Component;
