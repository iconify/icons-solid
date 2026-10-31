import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/t/tugfszw2c.css';
import '../../css/u/ui1vvxinh.css';
import '../../css/g/g9p5-xl9p.css';
import '../../css/c/c4cdtjxrf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="tugfszw2c wm-shadow"/><path class="ui1vvxinh"/><path class="g9p5-xl9p"/><path class="c4cdtjxrf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:crown"} {...others} />);
}

export default Component;
