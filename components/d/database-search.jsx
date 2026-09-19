import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/l/lcee_744z.css';
import '../../css/q/quqne-byv.css';
import '../../css/b/bs8yxcb2i.css';
import '../../css/h/hya04gyiz.css';
import '../../css/r/r0bva1bcw.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGAHTrygRZ"><g class="aql7dnt-u"><path class="lcee_744z"/><path class="quqne-byv"/><path class="bs8yxcb2i"/><path class="hya04gyiz"/><path class="r0bva1bcw"/></g></mask></defs><path mask="url(#SVGAHTrygRZ)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:database-search"} {...others} />);
}

export default Component;
