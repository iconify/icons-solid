import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z6tjmo3jk.css';
import '../../css/q/qn_9kabub.css';
import '../../css/t/tg7yrackx.css';
import '../../css/l/lbrfo6bnk.css';
import '../../css/s/s__ne5b8z.css';
import '../../css/g/g5tntd_zn.css';
import '../../css/v/vwf94rb7i.css';
import '../../css/x/xfb6rim7c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="z6tjmo3jk"><path class="qn_9kabub"/><path class="tg7yrackx"/><path class="lbrfo6bnk"/><path class="s__ne5b8z"/><path class="g5tntd_zn"/><path class="vwf94rb7i"/><path class="xfb6rim7c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:camera-7"} {...others} />);
}

export default Component;
