import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i_u1o-blq.css';
import '../../css/u/ud6_-2m2a.css';
import '../../css/u/ufo48bitx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="i_u1o-blq"/><path class="ud6_-2m2a"/><path class="ufo48bitx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:smart-speaker-filled"} {...others} />);
}

export default Component;
