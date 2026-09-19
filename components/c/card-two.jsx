import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/s/smw8n4bjx.css';
import '../../css/m/mbvagtp9n.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGELUQo9DW"><g class="v3_i3wktz"><path class="smw8n4bjx"/><path class="mbvagtp9n"/></g></mask></defs><path mask="url(#SVGELUQo9DW)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:card-two"} {...others} />);
}

export default Component;
