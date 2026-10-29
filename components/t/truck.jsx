import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/z/zq6ebebty.css';
import '../../css/t/t76u5u7nm.css';
import '../../css/x/x_w_1cc7u.css';
import '../../css/n/nlrn1be0k.css';
import '../../css/x/x_s97h_7r.css';
import '../../css/o/owchejq2m.css';
import '../../css/x/xv6joybca.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="wm-shadow zq6ebebty"/><path class="t76u5u7nm"/><path class="x_w_1cc7u"/><path class="nlrn1be0k"/><path class="x_s97h_7r"/><path class="owchejq2m wm-shine"/><path class="wm-deco xv6joybca"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:truck"} {...others} />);
}

export default Component;
