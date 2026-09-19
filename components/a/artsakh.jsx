import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/f/ftcyrvb-q.css';
import '../../css/b/bwdxsg6jt.css';
import '../../css/t/t4wur0y1b.css';
import '../../css/y/yym9lccmv.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="ftcyrvb-q"/><path class="bwdxsg6jt"/><path class="t4wur0y1b"/><path class="yym9lccmv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:artsakh"} {...others} />);
}

export default Component;
