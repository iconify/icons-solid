import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/a/a2arncpdg.css';
import '../../css/y/ypq9i8bvk.css';
import '../../css/j/j1d-3tb9r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="a2arncpdg"/><path class="ypq9i8bvk"/><path class="j1d-3tb9r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:cctv"} {...others} />);
}

export default Component;
