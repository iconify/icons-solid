import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/c_a_osb6t.css';
import '../../css/w/w8wnakb3s.css';
import '../../css/z/z4ubyo-3v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="c_a_osb6t"/><path class="w8wnakb3s"/><path class="z4ubyo-3v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:segment"} {...others} />);
}

export default Component;
