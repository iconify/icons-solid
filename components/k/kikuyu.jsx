import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/b/bkzngtbwh.css';
import '../../css/q/q-qv61bir.css';
import '../../css/d/dgdko38bd.css';
import '../../css/d/dfla4i6ug.css';
import '../../css/u/uudbpzgbo.css';
import '../../css/w/wzrieznqm.css';
import '../../css/x/xvht-ccup.css';
import '../../css/v/v6i275btf.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="bkzngtbwh"/><path class="q-qv61bir"/><path class="dgdko38bd"/><path class="dfla4i6ug"/><path class="uudbpzgbo"/><path class="wzrieznqm"/><path class="xvht-ccup"/><path class="v6i275btf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:kikuyu"} {...others} />);
}

export default Component;
