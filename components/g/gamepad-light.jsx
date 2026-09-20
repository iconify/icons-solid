import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vlfm7vbmw.css';
import '../../css/p/p2jgzllnh.css';
import '../../css/c/cz7b21b0u.css';
import '../../css/h/hab7_ybri.css';
import '../../css/f/fxshv2bcq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect class="vlfm7vbmw"/><path class="p2jgzllnh"/><rect class="cz7b21b0u"/><path class="hab7_ybri"/><path class="fxshv2bcq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:gamepad-light"} {...others} />);
}

export default Component;
