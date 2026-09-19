import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/l/ly7322hhe.css';
import '../../css/n/nts83s09d.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG17ZTkeUO"><g class="v3_i3wktz"><path class="ly7322hhe"/><path clip-rule="evenodd" class="nts83s09d"/></g></mask></defs><path mask="url(#SVG17ZTkeUO)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:hand-right"} {...others} />);
}

export default Component;
