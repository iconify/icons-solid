import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/w/wno-_f6yk.css';
import '../../css/c/ct42dfb0y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="wno-_f6yk"/><path class="ct42dfb0y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:stats-report"} {...others} />);
}

export default Component;
