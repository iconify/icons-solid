import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/ped2ifbwy.css';
import '../../css/h/h-zat1q1q.css';
import '../../css/j/jfwb-ipvu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ped2ifbwy"/><rect class="h-zat1q1q"/><rect class="jfwb-ipvu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxs:objects-vertical-bottom"} {...others} />);
}

export default Component;
