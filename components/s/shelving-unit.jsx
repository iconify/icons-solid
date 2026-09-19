import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/g/g8tawybju.css';
import '../../css/a/a8if0ew5t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="g8tawybju"/><path class="a8if0ew5t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:shelving-unit"} {...others} />);
}

export default Component;
