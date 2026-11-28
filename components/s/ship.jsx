import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/m/m1-vjp_xd.css';
import '../../css/z/zk92zjb_z.css';
import '../../css/d/dtrgj3edn.css';
import '../../css/u/usaw5gb_y.css';
import '../../css/c/chflpfbrw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="m1-vjp_xd"/><path class="zk92zjb_z"/><path class="dtrgj3edn"/><path class="usaw5gb_y"/><path class="chflpfbrw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:ship"} {...others} />);
}

export default Component;
