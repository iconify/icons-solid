import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/z/ziesqi8ao.css';
import '../../css/u/ug0o9qbnm.css';
import '../../css/x/xkhobpbzz.css';
import '../../css/y/ybkj5o_sj.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="ziesqi8ao"/><path class="ug0o9qbnm"/><path class="xkhobpbzz"/><path class="ybkj5o_sj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:ly"} {...others} />);
}

export default Component;
