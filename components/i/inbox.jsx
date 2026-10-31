import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/b/bogokvd1d.css';
import '../../css/i/iz_g0ubkw.css';
import '../../css/p/p8czqnwwp.css';
import '../../css/b/bna6ofbpf.css';
import '../../css/m/mt50d-nid.css';
import '../../css/o/ox6kjk99c.css';
import '../../css/b/b3v962bxd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="bogokvd1d"/><path class="iz_g0ubkw"/><path class="p8czqnwwp wm-shine"/><path class="bna6ofbpf wm-k"/><path class="mt50d-nid wm-a"/><path class="ox6kjk99c"/><path class="b3v962bxd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:inbox"} {...others} />);
}

export default Component;
