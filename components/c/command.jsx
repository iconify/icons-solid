import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fh9kd1bst.css';
import '../../css/a/a_z77pbhk.css';
import '../../css/i/im674ibsb.css';
import '../../css/m/mqax__jyy.css';
import '../../css/x/xfw_kddpp.css';
import '../../css/e/ei9e4ccpl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fh9kd1bst wm-shadow"/><path class="a_z77pbhk wm-k"/><path class="im674ibsb wm-k"/><path class="mqax__jyy wm-k"/><path class="wm-k xfw_kddpp"/><path class="ei9e4ccpl wm-shine"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:command"} {...others} />);
}

export default Component;
