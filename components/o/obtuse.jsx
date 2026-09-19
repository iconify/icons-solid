import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/o/om1j6ac9x.css';
import '../../css/n/nwswk1bnh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="om1j6ac9x"/><path class="nwswk1bnh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:obtuse"} {...others} />);
}

export default Component;
