import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/b/bcsuybb1d.css';
import '../../css/w/wtsoq_9ct.css';
import '../../css/q/q3bg5lk2i.css';
import '../../css/n/n162xzbfh.css';
import '../../css/p/pxpmocxhm.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="bcsuybb1d"/><path class="wtsoq_9ct"/><path class="q3bg5lk2i"/><path class="n162xzbfh"/><path class="pxpmocxhm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:ad"} {...others} />);
}

export default Component;
