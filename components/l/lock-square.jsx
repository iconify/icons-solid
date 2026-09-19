import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/m/m04jkm9ic.css';
import '../../css/c/cx17xhu1q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="m04jkm9ic"/><path class="cx17xhu1q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:lock-square"} {...others} />);
}

export default Component;
