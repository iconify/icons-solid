import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/x/xxykgd7yr.css';
import '../../css/c/c5n1bc1jx.css';
import '../../css/a/axe9dpbxf.css';
import '../../css/e/eo6dyjn3r.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="xxykgd7yr"/><path class="c5n1bc1jx"/><path class="axe9dpbxf"/><path class="eo6dyjn3r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:gt"} {...others} />);
}

export default Component;
