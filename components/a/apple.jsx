import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/o/oz-ooxwjh.css';
import '../../css/c/cnwp86box.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="oz-ooxwjh"/><path class="cnwp86box"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:apple"} {...others} />);
}

export default Component;
