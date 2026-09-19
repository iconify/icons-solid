import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/o/owy87kbwh.css';
import '../../css/z/z295cf91c.css';
import '../../css/y/yx-mim92i.css';
import '../../css/m/m0fg2bb7t.css';
import '../../css/x/xgkgj_b0l.css';
import '../../css/j/j_wg78xma.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="owy87kbwh"/><path class="z295cf91c"/><path class="yx-mim92i"/><path class="m0fg2bb7t"/><path class="xgkgj_b0l"/><path class="j_wg78xma"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:gq"} {...others} />);
}

export default Component;
