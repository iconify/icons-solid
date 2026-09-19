import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/c/c7_ov50_s.css';
import '../../css/y/y5tm36cko.css';
import '../../css/d/dllr7fbiz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="c7_ov50_s"/><path class="y5tm36cko"/><path class="dllr7fbiz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:tag-02"} {...others} />);
}

export default Component;
