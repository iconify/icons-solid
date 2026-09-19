import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/r/rpek7dswr.css';
import '../../css/y/y79rd2ghl.css';
import '../../css/z/z4ro1s-_b.css';
import '../../css/u/u__h28bup.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="rpek7dswr"/><path class="y79rd2ghl"/><path class="z4ro1s-_b"/><path class="u__h28bup"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:consignment"} {...others} />);
}

export default Component;
