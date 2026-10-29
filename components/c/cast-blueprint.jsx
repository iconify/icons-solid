import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/o/omfl1-bnm.css';
import '../../css/g/g2xclxbug.css';
import '../../css/c/c_4afgbos.css';
import '../../css/a/awkth7x7q.css';
import '../../css/g/g__ysmb5y.css';
import '../../css/g/grfx19ckb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="omfl1-bnm wm-deco"/><path class="g2xclxbug wm-deco"/><path class="c_4afgbos wm-k"/><path class="awkth7x7q wm-a"/><path class="g__ysmb5y wm-k"/><path class="grfx19ckb wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:cast-blueprint"} {...others} />);
}

export default Component;
