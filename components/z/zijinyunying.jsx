import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/adexpl72i.css';
import '../../css/b/bns6hkbpl.css';
import '../../css/e/erfgj169s.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGP03YqePH"><g class="adexpl72i"><path class="bns6hkbpl"/><path class="erfgj169s"/></g></mask></defs><path mask="url(#SVGP03YqePH)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:zijinyunying"} {...others} />);
}

export default Component;
