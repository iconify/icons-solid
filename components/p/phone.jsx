import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nsmqbjbcj.css';
import '../../css/m/m93876m1y.css';
import '../../css/t/tix-l2bjq.css';
import '../../css/d/dkwx-cbjk.css';
import '../../css/w/w-l-n57cr.css';
import '../../css/e/efsl4ma5s.css';
import '../../css/m/mx-s5abmy.css';
import '../../css/b/bbzjuaclc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nsmqbjbcj wm-shadow"/><path class="m93876m1y"/><path class="tix-l2bjq"/><path class="dkwx-cbjk"/><path class="w-l-n57cr"/><path class="efsl4ma5s wm-shine"/><path class="mx-s5abmy"/><path class="bbzjuaclc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-plush:phone"} {...others} />);
}

export default Component;
