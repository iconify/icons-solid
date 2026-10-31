import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/t/txf3d7t6n.css';
import '../../css/v/v5rcw3brp.css';
import '../../css/e/en7ok6bgz.css';
import '../../css/u/ukzh41bzd.css';
import '../../css/q/q-nrvp36w.css';
import '../../css/y/y18qn6b2z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="txf3d7t6n wm-shadow"/><path class="v5rcw3brp"/><path class="en7ok6bgz"/><path class="ukzh41bzd"/><path class="q-nrvp36w"/><path class="y18qn6b2z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:footprints"} {...others} />);
}

export default Component;
