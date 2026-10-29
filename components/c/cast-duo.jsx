import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/uifqygoao.css';
import '../../css/b/bm5_bnnro.css';
import '../../css/o/o38mptbie.css';
import '../../css/y/yfr2y5n3b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="uifqygoao"/><path class="bm5_bnnro wm-a"/><path class="o38mptbie wm-a"/><path class="yfr2y5n3b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:cast-duo"} {...others} />);
}

export default Component;
