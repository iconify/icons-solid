import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bnjedac9w.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/jceh016qq.css';
import '../../css/m/mvc1e_bil.css';
import '../../css/p/p7iqdlb2g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bnjedac9w secondary"/><g class="dt0cm9dhy primary"><path class="jceh016qq"/><path class="mvc1e_bil"/><path class="p7iqdlb2g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:store-duo"} {...others} />);
}

export default Component;
