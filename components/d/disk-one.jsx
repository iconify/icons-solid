import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/u/u89ec5bmm.css';
import '../../css/r/rfcep4bai.css';
import '../../css/z/zct1hfb-z.css';
import '../../css/i/irnqlskmr.css';
import '../../css/m/maw6_-12u.css';

const viewBox = {"width":49,"height":48};
const content = `<defs><mask id="SVGVnPZjeoO"><g class="ufeehvblu"><path class="u89ec5bmm"/><path class="rfcep4bai"/><path class="zct1hfb-z"/><path class="irnqlskmr"/></g></mask></defs><path mask="url(#SVGVnPZjeoO)" class="maw6_-12u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:disk-one"} {...others} />);
}

export default Component;
