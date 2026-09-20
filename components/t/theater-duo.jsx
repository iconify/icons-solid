import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ikw832bkv.css';
import '../../css/m/mbc9pcbpx.css';
import '../../css/k/klbkanewn.css';
import '../../css/x/x4z_tobfx.css';
import '../../css/f/f1ks1svvc.css';
import '../../css/k/kut0n4j6c.css';
import '../../css/g/g23_8jlkl.css';
import '../../css/j/jy09bwl6l.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="ikw832bkv"/><path class="mbc9pcbpx"/><path class="klbkanewn"/><path class="x4z_tobfx"/><path class="f1ks1svvc"/><path clip-rule="evenodd" class="kut0n4j6c"/><path clip-rule="evenodd" class="g23_8jlkl"/><path class="jy09bwl6l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:theater-duo"} {...others} />);
}

export default Component;
