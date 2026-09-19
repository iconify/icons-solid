import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/k/kf0ymebzp.css';
import '../../css/n/nmwgn4b4u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="kf0ymebzp"/><path class="nmwgn4b4u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:artboard"} {...others} />);
}

export default Component;
