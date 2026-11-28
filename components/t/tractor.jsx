import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/p/pho0ors8b.css';
import '../../css/l/lq2untbyp.css';
import '../../css/o/otcj4vp7z.css';
import '../../css/r/r6f24-9zg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="pho0ors8b"/><path class="lq2untbyp"/><path class="otcj4vp7z"/><path class="r6f24-9zg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:tractor"} {...others} />);
}

export default Component;
