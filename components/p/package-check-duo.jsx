import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lrinswb8b.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/i/in_hfigss.css';
import '../../css/w/w-4-qtbwu.css';
import '../../css/c/cgapqzb1g.css';
import '../../css/z/zp2n0ok0n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lrinswb8b secondary"/><g class="dt0cm9dhy primary"><path class="in_hfigss"/><path class="w-4-qtbwu"/><path class="cgapqzb1g"/><path class="zp2n0ok0n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:package-check-duo"} {...others} />);
}

export default Component;
