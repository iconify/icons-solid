import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t-lzs6bkr.css';
import '../../css/w/wprsklb5k.css';
import '../../css/i/i8-jei3er.css';
import '../../css/l/loc612tfy.css';
import '../../css/w/wbg2mbc6a.css';
import '../../css/t/tieabtb8w.css';
import '../../css/j/jkabrbczq.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="t-lzs6bkr"/><path class="wprsklb5k"/><path class="i8-jei3er"/><path class="loc612tfy"/><path class="wbg2mbc6a"/><path class="tieabtb8w"/><path class="jkabrbczq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:slovakia"} {...others} />);
}

export default Component;
