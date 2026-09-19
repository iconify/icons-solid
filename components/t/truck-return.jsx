import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/f/f-a15_hfh.css';
import '../../css/d/dudf7qbam.css';
import '../../css/e/eqod-_zxh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="f-a15_hfh"/><path class="dudf7qbam"/><path class="eqod-_zxh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:truck-return"} {...others} />);
}

export default Component;
