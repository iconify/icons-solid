import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sxrhz3y3r.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/q/qswu94bhf.css';
import '../../css/z/zyuqr7b8r.css';
import '../../css/g/ggp-8rbry.css';
import '../../css/t/tmd1xl5jf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="secondary sxrhz3y3r"/><g class="dt0cm9dhy primary"><path class="qswu94bhf"/><path class="zyuqr7b8r"/><path class="ggp-8rbry"/><path class="tmd1xl5jf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:church-duo"} {...others} />);
}

export default Component;
