import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/g/gnu5dik5b.css';
import '../../css/q/q4rumib0w.css';
import '../../css/v/vp5nx6b1u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="gnu5dik5b"/><path class="q4rumib0w"/><path class="vp5nx6b1u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:chocolate"} {...others} />);
}

export default Component;
