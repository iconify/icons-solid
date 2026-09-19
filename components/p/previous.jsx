import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/z/z02lppbea.css';
import '../../css/b/b-pg8xbkk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="z02lppbea"/><path class="b-pg8xbkk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:previous"} {...others} />);
}

export default Component;
