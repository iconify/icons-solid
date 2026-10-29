import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xq-2jgltl.css';
import '../../css/q/q_x17n-8o.css';
import '../../css/h/h4v288bmp.css';
import '../../css/z/zhkr15b7o.css';
import '../../css/d/d0rdk4b3h.css';
import '../../css/l/lj4n6xbhx.css';
import '../../css/z/z7_ywibmr.css';
import '../../css/k/kl7twqbnb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wm-shadow xq-2jgltl"/><path class="q_x17n-8o"/><path class="h4v288bmp"/><path class="zhkr15b7o"/><path class="d0rdk4b3h"/><path class="lj4n6xbhx wm-shine"/><path class="z7_ywibmr"/><path class="kl7twqbnb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-plush:wrench"} {...others} />);
}

export default Component;
