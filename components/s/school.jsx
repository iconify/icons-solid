import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fe_yj2gmv.css';
import '../../css/m/m6_8tzbzx.css';
import '../../css/l/lv8wzrvsk.css';
import '../../css/n/nsaobjj4n.css';
import '../../css/b/b_u8-y3gn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fe_yj2gmv wm-k"/><path class="m6_8tzbzx wm-a"/><path class="lv8wzrvsk wm-k"/><path class="nsaobjj4n wm-k"/><path class="b_u8-y3gn wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:school"} {...others} />);
}

export default Component;
