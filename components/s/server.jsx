import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/y/yen9g7bht.css';
import '../../css/m/mlcd-5bnp.css';
import '../../css/t/tekp_ab_r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="yen9g7bht"/><path class="mlcd-5bnp"/><path class="tekp_ab_r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:server"} {...others} />);
}

export default Component;
