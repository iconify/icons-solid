import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/f/fkljh8brr.css';
import '../../css/e/eu6bm9bhp.css';
import '../../css/j/ji8nwkjyq.css';
import '../../css/z/zvfvkwbdz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="fkljh8brr wm-shadow"/><path class="eu6bm9bhp"/><path class="ji8nwkjyq"/><path class="zvfvkwbdz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:sun-moon"} {...others} />);
}

export default Component;
