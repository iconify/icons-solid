import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/om9lxqb-n.css';
import '../../css/k/koo4uzmtu.css';
import '../../css/i/ixqmu64br.css';
import '../../css/k/k_i87wbus.css';
import '../../css/n/n12eunbls.css';
import '../../css/s/sbq06gxks.css';
import '../../css/w/w_bzgjbun.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="om9lxqb-n wm-shadow"/><path class="koo4uzmtu"/><path class="ixqmu64br"/><path class="k_i87wbus"/><path class="n12eunbls"/><path class="sbq06gxks wm-shine"/><path class="w_bzgjbun"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-plush:plane"} {...others} />);
}

export default Component;
