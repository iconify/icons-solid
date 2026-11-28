import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/usb52b63m.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/i/imwmxwxdg.css';
import '../../css/p/p5yi_xv5c.css';
import '../../css/h/hs6x-9w1w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="secondary usb52b63m"/><g class="dt0cm9dhy primary"><path class="imwmxwxdg"/><path class="p5yi_xv5c"/><path class="hs6x-9w1w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:ease-linear-duo"} {...others} />);
}

export default Component;
