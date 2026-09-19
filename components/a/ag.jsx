import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/p/pmmu4mbfd.css';
import '../../css/y/yxjb6vi-t.css';
import '../../css/f/fwq0gab4k.css';
import '../../css/g/g2isegifu.css';
import '../../css/d/d0-w9mbxs.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="pmmu4mbfd"/><path class="yxjb6vi-t"/><path class="fwq0gab4k"/><path class="g2isegifu"/><path class="d0-w9mbxs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:ag"} {...others} />);
}

export default Component;
