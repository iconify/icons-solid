import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/u/ujpf-nb9o.css';
import '../../css/q/qv2ueidvj.css';
import '../../css/a/azq0wlbrf.css';
import '../../css/w/wy4x-hb-x.css';
import '../../css/k/kfa1k9bll.css';
import '../../css/y/yp9mj0b1w.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="ujpf-nb9o"/><path class="qv2ueidvj"/><path class="azq0wlbrf"/><path class="wy4x-hb-x"/><path class="kfa1k9bll"/><path class="yp9mj0b1w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:lgbt"} {...others} />);
}

export default Component;
