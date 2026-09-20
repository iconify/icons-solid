import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/wxrlmccjj.css';
import '../../css/i/iyh26i1-m.css';
import '../../css/g/g6zbtldbm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="wxrlmccjj"/><path class="iyh26i1-m"/><circle class="g6zbtldbm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:smartphone-2-line-duotone"} {...others} />);
}

export default Component;
