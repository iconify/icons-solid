import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/w/w5o7g2ubn.css';
import '../../css/a/al70cwvoz.css';
import '../../css/t/thqxrhbdl.css';
import '../../css/x/xnuytgkwb.css';
import '../../css/m/m4gqnvbgu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="w5o7g2ubn"/><path class="al70cwvoz"/><path class="thqxrhbdl wm-shine"/><path class="xnuytgkwb"/><path class="m4gqnvbgu wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:virus"} {...others} />);
}

export default Component;
