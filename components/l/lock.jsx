import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/u/uxw27rbus.css';
import '../../css/k/kh79f8giu.css';
import '../../css/o/olut8cbbc.css';
import '../../css/y/y2wq6oazd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="uxw27rbus wm-shadow"/><path class="kh79f8giu"/><path class="olut8cbbc"/><path class="y2wq6oazd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:lock"} {...others} />);
}

export default Component;
