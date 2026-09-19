import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/g/gxyloibgv.css';
import '../../css/d/d-hdlvbnx.css';
import '../../css/z/zdoglobqf.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGDDApAd5l"><g class="aql7dnt-u"><path class="gxyloibgv"/><path class="d-hdlvbnx"/><path class="zdoglobqf"/></g></mask></defs><path mask="url(#SVGDDApAd5l)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:onesies"} {...others} />);
}

export default Component;
