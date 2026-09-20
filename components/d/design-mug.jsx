import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/n/nlnj_72zj.css';
import '../../css/m/mxxgy6bof.css';
import '../../css/w/wu-g8fbwq.css';
import '../../css/b/bm2770gic.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="nlnj_72zj"/><path class="mxxgy6bof"/><path class="wu-g8fbwq"/><path class="bm2770gic"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:design-mug"} {...others} />);
}

export default Component;
