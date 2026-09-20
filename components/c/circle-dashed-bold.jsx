import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r96bpfbad.css';
import '../../css/d/dtyzhebnm.css';
import '../../css/c/clw-1dbft.css';
import '../../css/o/ot6qy7bcn.css';
import '../../css/p/pdyj7w-0r.css';
import '../../css/c/ck8mo4v_l.css';
import '../../css/f/f4cpcjb2c.css';
import '../../css/h/hlza-_q9v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="r96bpfbad"/><path class="dtyzhebnm"/><path class="clw-1dbft"/><path class="ot6qy7bcn"/><path class="pdyj7w-0r"/><path class="ck8mo4v_l"/><path class="f4cpcjb2c"/><path class="hlza-_q9v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:circle-dashed-bold"} {...others} />);
}

export default Component;
