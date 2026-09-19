import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ifruxfbhy.css';
import '../../css/u/ui23gybsc.css';
import '../../css/b/bh726_l3v.css';
import '../../css/l/lwvmlsb8x.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="ifruxfbhy"/><path class="ui23gybsc"/><path class="bh726_l3v"/><path class="lwvmlsb8x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:spider"} {...others} />);
}

export default Component;
