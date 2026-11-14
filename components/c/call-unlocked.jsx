import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/d/da4g6hbex.css';
import '../../css/h/hsj063b4j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="da4g6hbex"/><path class="hsj063b4j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:call-unlocked"} {...others} />);
}

export default Component;
