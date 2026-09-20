import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/m/m3q5dgd3j.css';
import '../../css/z/z5isr3bvu.css';
import '../../css/c/ce7yr5b1g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path vector-effect="non-scaling-stroke" class="m3q5dgd3j"/><path vector-effect="non-scaling-stroke" class="z5isr3bvu"/><path vector-effect="non-scaling-stroke" class="ce7yr5b1g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"wordpress:format-list-numbered-rtl"} {...others} />);
}

export default Component;
