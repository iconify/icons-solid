import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/a/adc0nobix.css';
import '../../css/y/yxfi3h8at.css';
import '../../css/p/pxbmlybch.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="adc0nobix"/><path class="yxfi3h8at"/><path class="pxbmlybch"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:swimming-cap"} {...others} />);
}

export default Component;
