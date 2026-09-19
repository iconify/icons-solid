import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/m/m-_faca9a.css';
import '../../css/y/ybvr_gb5s.css';
import '../../css/l/l5-whi4iw.css';
import '../../css/m/mwx4n6bfc.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGXba4qcCj"><g class="rohhhzb0l"><circle class="m-_faca9a"/><path class="ybvr_gb5s"/><circle class="l5-whi4iw"/><path class="mwx4n6bfc"/></g></mask></defs><path mask="url(#SVGXba4qcCj)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:appointment"} {...others} />);
}

export default Component;
