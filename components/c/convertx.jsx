import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/auxnyvbwq.css';
import '../../css/z/zw3ggzb3m.css';
import '../../css/f/fhnbcoszv.css';
import '../../css/y/ysdnnab9o.css';
import '../../css/o/ood9gmbae.css';
import '../../css/i/i6uaaqe3b.css';
import '../../css/w/w5_zhp96t.css';
import '../../css/s/s_0_xqbiy.css';
import '../../css/p/py83_xbzz.css';
import '../../css/e/emqoo7mti.css';
import '../../css/w/wshbemjzf.css';

const viewBox = {"width":96.983,"height":132.292};
const content = `<g transform="translate(-56.568 -82.29)"><path class="auxnyvbwq"/><circle class="zw3ggzb3m"/><circle class="fhnbcoszv"/><circle class="ysdnnab9o"/><circle class="ood9gmbae"/><circle class="i6uaaqe3b"/><circle class="w5_zhp96t"/><circle class="s_0_xqbiy"/><circle class="py83_xbzz"/><circle class="emqoo7mti"/><path class="wshbemjzf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:convertx"} {...others} />);
}

export default Component;
