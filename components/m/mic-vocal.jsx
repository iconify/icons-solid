import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/f/fcuv24b9f.css';
import '../../css/q/qrpl6s08m.css';
import '../../css/j/jz8upnbzt.css';
import '../../css/h/hlkmo9h7u.css';
import '../../css/k/kqhm11jqj.css';
import '../../css/o/o-z6dzbvz.css';
import '../../css/s/sjgcrcdjv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="fcuv24b9f wm-shadow"/><path class="qrpl6s08m"/><path class="jz8upnbzt"/><path class="hlkmo9h7u"/><path class="kqhm11jqj"/><path class="o-z6dzbvz wm-shine"/><path class="sjgcrcdjv wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:mic-vocal"} {...others} />);
}

export default Component;
