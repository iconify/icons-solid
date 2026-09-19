import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to0c2ub7t.css';
import '../../css/y/ydxehobey.css';
import '../../css/i/incu9z2mz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to0c2ub7t"><path class="ydxehobey"/><path class="incu9z2mz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flowbite:arrow-right-arrow-left-solid"} {...others} />);
}

export default Component;
