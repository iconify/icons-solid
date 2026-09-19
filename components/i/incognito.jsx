import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/f/fpwytkp9v.css';
import '../../css/d/d8dsennzr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="fpwytkp9v"/><path class="d8dsennzr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:incognito"} {...others} />);
}

export default Component;
