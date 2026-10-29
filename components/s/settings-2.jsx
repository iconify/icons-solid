import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qbq6nubdh.css';
import '../../css/k/kekxzacsh.css';
import '../../css/h/h9u0qwbcl.css';
import '../../css/t/t1ss_k7mx.css';
import '../../css/x/xsxps7b1e.css';
import '../../css/n/nnrud3bfi.css';
import '../../css/a/af2uke29j.css';
import '../../css/w/w0if2acil.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qbq6nubdh wm-shadow"/><path class="kekxzacsh wm-k"/><path class="h9u0qwbcl wm-k"/><path class="t1ss_k7mx wm-a"/><path class="wm-a xsxps7b1e"/><path class="nnrud3bfi wm-a"/><path class="af2uke29j wm-a"/><path class="w0if2acil wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:settings-2"} {...others} />);
}

export default Component;
