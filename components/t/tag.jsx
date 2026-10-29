import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qy8dnl6oy.css';
import '../../css/t/ttcyabcty.css';
import '../../css/s/smbm8pb0v.css';
import '../../css/x/xmfiwccef.css';
import '../../css/e/em40n_bra.css';
import '../../css/m/mb4muxwqi.css';
import '../../css/o/opxis9yve.css';
import '../../css/b/b7_qa70_y.css';
import '../../css/r/rbegxbbzo.css';
import '../../css/q/q6857ubkw.css';
import '../../css/v/vm6i9_b1s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qy8dnl6oy wm-shadow"/><path class="ttcyabcty wm-k"/><path class="smbm8pb0v wm-k"/><path class="wm-k xmfiwccef"/><path class="em40n_bra wm-k"/><path class="mb4muxwqi wm-k"/><path class="opxis9yve wm-shine"/><path class="b7_qa70_y wm-k"/><path class="rbegxbbzo wm-k"/><path class="q6857ubkw wm-k"/><path class="vm6i9_b1s wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:tag"} {...others} />);
}

export default Component;
