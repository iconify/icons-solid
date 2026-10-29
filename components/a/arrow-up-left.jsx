import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mutf_sboy.css';
import '../../css/g/gdwd5felf.css';
import '../../css/p/p42fz6t_u.css';
import '../../css/z/zgmcztboz.css';
import '../../css/q/qyy895bgd.css';
import '../../css/s/s9fbtob_a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mutf_sboy wm-shadow"/><path class="gdwd5felf wm-k"/><path class="p42fz6t_u wm-k"/><path class="wm-k zgmcztboz"/><path class="qyy895bgd wm-k"/><path class="s9fbtob_a wm-shine"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:arrow-up-left"} {...others} />);
}

export default Component;
