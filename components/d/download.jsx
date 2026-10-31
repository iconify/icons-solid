import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/u/ufw8hxw0u.css';
import '../../css/r/rj3o2cbve.css';
import '../../css/q/qsgqxzw3c.css';
import '../../css/l/lw875-p4x.css';
import '../../css/f/fzdcxm2hg.css';
import '../../css/i/iffkkwvft.css';
import '../../css/m/m-ta5e1qr.css';
import '../../css/a/a3wtnmbeh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="ufw8hxw0u"/><path class="rj3o2cbve"/><path class="qsgqxzw3c wm-shine"/><path class="lw875-p4x wm-k"/><path class="fzdcxm2hg wm-a"/><path class="iffkkwvft"/><path class="m-ta5e1qr"/><path class="a3wtnmbeh wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:download"} {...others} />);
}

export default Component;
