import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/y/ykdzreamh.css';
import '../../css/a/a-gvidzwq.css';
import '../../css/r/rje4agm5u.css';
import '../../css/j/jdkm7xbrx.css';
import '../../css/e/ekdzdgxhq.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="ykdzreamh"/><path class="a-gvidzwq"/><path class="rje4agm5u"/><path class="jdkm7xbrx"/><path class="ekdzdgxhq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:nc"} {...others} />);
}

export default Component;
