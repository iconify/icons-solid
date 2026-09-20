import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p2c87wb0k.css';
import '../../css/s/s0gpikbzf.css';
import '../../css/a/awmnfdi-j.css';
import '../../css/l/lhtcd4bcc.css';
import '../../css/u/u6fqh2b5c.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="p2c87wb0k"/><path clip-rule="evenodd" class="s0gpikbzf"/><path class="awmnfdi-j"/><path class="lhtcd4bcc"/><path class="u6fqh2b5c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:airship"} {...others} />);
}

export default Component;
