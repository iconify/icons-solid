import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y02nqccdo.css';
import '../../css/h/hs6n9jutm.css';
import '../../css/i/ixoav8bbi.css';
import '../../css/c/ceqlolbqm.css';
import '../../css/c/cj05-zbvr.css';
import '../../css/y/yf48m3b9k.css';
import '../../css/v/vxxqnpf-c.css';
import '../../css/k/k0e0xrbts.css';
import '../../css/j/jvaq9rw8p.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wm-shadow y02nqccdo"/><path class="hs6n9jutm wm-k"/><path class="ixoav8bbi wm-k"/><path class="ceqlolbqm wm-k"/><path class="cj05-zbvr wm-k"/><path class="wm-k yf48m3b9k"/><path class="vxxqnpf-c wm-shine"/><path class="k0e0xrbts wm-a"/><path class="jvaq9rw8p wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:pilcrow"} {...others} />);
}

export default Component;
