import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pveokts-z.css';
import '../../css/c/ckle73lto.css';
import '../../css/b/beflqlvsa.css';
import '../../css/i/imlamlumm.css';
import '../../css/c/ceb50jbsx.css';
import '../../css/w/wh85ymupj.css';
import '../../css/n/n_zp8qabl.css';
import '../../css/e/e9yjolbft.css';

const viewBox = {"width":1024,"height":1024};
const content = `<g display="block"><path class="pveokts-z"/><path class="ckle73lto"/><path class="beflqlvsa"/><path class="imlamlumm"/><path class="ceb50jbsx"/><path class="wh85ymupj"/><path class="n_zp8qabl"/><path class="e9yjolbft"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconito:apple"} {...others} />);
}

export default Component;
