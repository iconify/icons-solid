import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/l/lji_-4zcb.css';
import '../../css/m/m2n4j8blj.css';
import '../../css/y/ya4x_5u0n.css';
import '../../css/q/q-40t5bys.css';
import '../../css/o/ob056tb5t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="lji_-4zcb wm-shadow"/><path class="m2n4j8blj"/><path class="ya4x_5u0n"/><path class="q-40t5bys"/><path class="ob056tb5t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:search-x"} {...others} />);
}

export default Component;
