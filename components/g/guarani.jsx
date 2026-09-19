import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/w/wqbbqwb-i.css';
import '../../css/m/mwx-_uq8u.css';
import '../../css/e/e5_fwcbum.css';
import '../../css/q/qayroobql.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="wqbbqwb-i"/><path class="mwx-_uq8u"/><path class="e5_fwcbum"/><path class="qayroobql"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:guarani"} {...others} />);
}

export default Component;
