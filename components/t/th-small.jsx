import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cc3fl7wwz.css';
import '../../css/x/xul7skbaf.css';
import '../../css/k/k6fth3b8e.css';
import '../../css/k/kg1fgulfu.css';
import '../../css/h/h_ihj6bfk.css';
import '../../css/y/ykddz2-et.css';
import '../../css/d/dvmnhgwuq.css';
import '../../css/t/t_1nmccxd.css';
import '../../css/c/cj_75lt4l.css';

const viewBox = {"width":24,"height":24};
const content = `<circle class="cc3fl7wwz"/><circle class="xul7skbaf"/><circle class="k6fth3b8e"/><circle class="kg1fgulfu"/><circle class="h_ihj6bfk"/><circle class="ykddz2-et"/><circle class="dvmnhgwuq"/><circle class="t_1nmccxd"/><circle class="cj_75lt4l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"typcn:th-small"} {...others} />);
}

export default Component;
