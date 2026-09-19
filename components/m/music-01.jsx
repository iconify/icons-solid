import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/c/c0mhb5-4c.css';
import '../../css/f/fdsc552_s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><circle class="c0mhb5-4c"/><path class="fdsc552_s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:music-01"} {...others} />);
}

export default Component;
