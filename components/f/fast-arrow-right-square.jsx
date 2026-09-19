import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/k/kodwtyteq.css';
import '../../css/c/ct42dfb0y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="kodwtyteq"/><path class="ct42dfb0y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:fast-arrow-right-square"} {...others} />);
}

export default Component;
