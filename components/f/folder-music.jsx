import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/x/xedzjig2g.css';
import '../../css/u/ud5c6fcjr.css';
import '../../css/o/okqenj9_f.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGBtCSXbUx"><g class="v3_i3wktz"><path class="xedzjig2g"/><path class="ud5c6fcjr"/><circle class="okqenj9_f"/></g></mask></defs><path mask="url(#SVGBtCSXbUx)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:folder-music"} {...others} />);
}

export default Component;
