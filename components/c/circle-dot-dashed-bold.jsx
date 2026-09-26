import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r96bpfbad.css';
import '../../css/c/clw-1dbft.css';
import '../../css/v/vib9f-gse.css';
import '../../css/o/ot6qy7bcn.css';
import '../../css/u/umv7d2frl.css';
import '../../css/w/wv_uagb0m.css';
import '../../css/c/ck8mo4v_l.css';
import '../../css/f/f4cpcjb2c.css';
import '../../css/h/hqi1ilbjn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="r96bpfbad"/><path class="clw-1dbft"/><path class="vib9f-gse"/><path class="ot6qy7bcn"/><path class="umv7d2frl"/><path class="wv_uagb0m"/><path class="ck8mo4v_l"/><path class="f4cpcjb2c"/><path class="hqi1ilbjn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:circle-dot-dashed-bold"} {...others} />);
}

export default Component;
