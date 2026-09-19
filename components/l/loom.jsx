import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/w/w8_ilnbed.css';
import '../../css/f/f1aecdc4m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="w8_ilnbed"/><path class="f1aecdc4m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:loom"} {...others} />);
}

export default Component;
