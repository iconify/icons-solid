import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/k/k9anlbbxt.css';
import '../../css/h/h2x2yzbat.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGI0ofmUkm"><g class="v3_i3wktz"><rect class="k9anlbbxt"/><path class="h2x2yzbat"/></g></mask></defs><path mask="url(#SVGI0ofmUkm)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:voice"} {...others} />);
}

export default Component;
