import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/v/vkcj4bcdm.css';
import '../../css/d/dudy4jk-t.css';
import '../../css/x/xln2qqbsu.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGur1HAdmZ"><g class="v3_i3wktz"><path class="vkcj4bcdm"/><path class="dudy4jk-t"/><path class="xln2qqbsu"/></g></mask></defs><path mask="url(#SVGur1HAdmZ)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:multi-circular"} {...others} />);
}

export default Component;
