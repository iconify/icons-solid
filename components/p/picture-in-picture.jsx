import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/i/i24bdwb1y.css';
import '../../css/c/ctfc6kb2f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="i24bdwb1y"/><path class="ctfc6kb2f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:picture-in-picture"} {...others} />);
}

export default Component;
