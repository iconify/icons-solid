import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/v/vp8jg4bpk.css';
import '../../css/z/zotbml7et.css';
import '../../css/v/vuq5iub0q.css';
import '../../css/i/i3e4kwb2n.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="s9cl3zbei"><path class="vp8jg4bpk"/><path class="zotbml7et"/><path class="vuq5iub0q"/><path class="i3e4kwb2n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:ranking-list"} {...others} />);
}

export default Component;
