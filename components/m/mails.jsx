import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/u/ubgnq6b1b.css';
import '../../css/z/zp84l1btb.css';
import '../../css/u/ug_n2rudh.css';
import '../../css/a/aap5atbkv.css';
import '../../css/k/k57fw1bbq.css';
import '../../css/w/wr52pabxa.css';
import '../../css/j/jydfggb5u.css';
import '../../css/i/i9q-8tatj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="ubgnq6b1b"/><path class="zp84l1btb"/><path class="ug_n2rudh wm-shine"/><path class="aap5atbkv wm-k"/><path class="k57fw1bbq wm-a"/><path class="wr52pabxa"/><path class="jydfggb5u"/><path class="i9q-8tatj wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:mails"} {...others} />);
}

export default Component;
