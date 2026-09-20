import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nciej2bpn.css';
import '../../css/p/p_3zmsvya.css';
import '../../css/u/urszfnr6d.css';
import '../../css/i/i2d4wactk.css';
import '../../css/k/kzr9ris9n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="nciej2bpn"/><g class="p_3zmsvya"><path class="urszfnr6d"/><path class="i2d4wactk"/></g><path class="kzr9ris9n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:rice"} {...others} />);
}

export default Component;
