import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/x/x3ayerbmp.css';
import '../../css/j/js7t7bc_d.css';
import '../../css/b/bqz70n25u.css';
import '../../css/v/v4nxneb1i.css';
import '../../css/b/b1vi6j17a.css';
import '../../css/l/l_q7v9vla.css';
import '../../css/j/joty_yrzs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="wm-shadow x3ayerbmp"/><path class="js7t7bc_d"/><path class="bqz70n25u"/><path class="v4nxneb1i"/><path class="b1vi6j17a"/><path class="l_q7v9vla wm-shine"/><path class="joty_yrzs wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:tooth-crown"} {...others} />);
}

export default Component;
