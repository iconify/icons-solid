import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/m/mbtdk4tsm.css';
import '../../css/t/tavlapbbl.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGWhtzJdHY"><g class="v3_i3wktz"><path class="mbtdk4tsm"/><path class="tavlapbbl"/></g></mask></defs><path mask="url(#SVGWhtzJdHY)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:watermelon"} {...others} />);
}

export default Component;
