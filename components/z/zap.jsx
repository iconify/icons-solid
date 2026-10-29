import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n2e5n0siw.css';
import '../../css/w/wh-ocx65v.css';
import '../../css/s/sfovvrdcy.css';
import '../../css/e/eev5m8c_b.css';
import '../../css/n/nlg_1bbdi.css';
import '../../css/q/qoncggexj.css';
import '../../css/z/z_500r6vu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n2e5n0siw wm-shadow"/><path class="wh-ocx65v"/><path class="sfovvrdcy"/><path class="eev5m8c_b"/><path class="nlg_1bbdi"/><path class="qoncggexj wm-shine"/><path class="z_500r6vu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-plush:zap"} {...others} />);
}

export default Component;
