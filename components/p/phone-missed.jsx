import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/c/cptr7so_p.css';
import '../../css/f/fn7ur3xjf.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGKBR7oeIz"><g class="v3_i3wktz"><path class="cptr7so_p"/><path class="fn7ur3xjf"/></g></mask></defs><path mask="url(#SVGKBR7oeIz)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:phone-missed"} {...others} />);
}

export default Component;
