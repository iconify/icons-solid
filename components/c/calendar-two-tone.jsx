import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/f9hoyynpq.css';
import '../../css/k/ku4e5zrap.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="f9hoyynpq"/><path class="ku4e5zrap"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:calendar-two-tone"} {...others} />);
}

export default Component;
