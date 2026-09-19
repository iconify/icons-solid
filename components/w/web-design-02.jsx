import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/n/nbw96fb6o.css';
import '../../css/r/rix9_bcxu.css';
import '../../css/b/b34nk39nk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="nbw96fb6o"/><path class="rix9_bcxu"/><path class="b34nk39nk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:web-design-02"} {...others} />);
}

export default Component;
