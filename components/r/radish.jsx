import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hv130ab-t.css';
import '../../css/n/nfwguf0bv.css';
import '../../css/j/jry5s1b0c.css';
import '../../css/q/qup_wkbsi.css';
import '../../css/j/jwr8zqbox.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGCcPLPbGL"><g class="hv130ab-t"><path class="nfwguf0bv"/><path class="jry5s1b0c"/><path class="qup_wkbsi"/><path class="jwr8zqbox"/></g></mask></defs><path mask="url(#SVGCcPLPbGL)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:radish"} {...others} />);
}

export default Component;
