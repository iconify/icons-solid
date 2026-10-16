import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dq3d9zbgk.css';
import '../../css/x/xgeey26gf.css';
import '../../css/t/tsmkxjb6u.css';
import '../../css/z/zngp5w-5j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="dq3d9zbgk"/><path class="xgeey26gf"/><rect transform="matrix(-1 0 0 1 13.87 10.4)" class="tsmkxjb6u"/><path class="zngp5w-5j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:mouse-up"} {...others} />);
}

export default Component;
