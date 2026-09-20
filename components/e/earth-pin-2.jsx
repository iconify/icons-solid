import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lo4f83b5s.css';
import '../../css/r/rht_4lbjy.css';
import '../../css/o/o4kslqbxm.css';
import '../../css/m/m8tk85bpf.css';
import '../../css/k/k5pyaacni.css';
import '../../css/z/z24oromez.css';
import '../../css/k/ke-e6fbgr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="lo4f83b5s"/><path class="rht_4lbjy"/><path class="o4kslqbxm"/><path class="m8tk85bpf"/><path class="k5pyaacni"/><path class="z24oromez"/><path class="ke-e6fbgr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:earth-pin-2"} {...others} />);
}

export default Component;
