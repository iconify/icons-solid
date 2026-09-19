import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/e/enuncybsk.css';
import '../../css/h/hyr8-8bhd.css';
import '../../css/h/ha34b3bre.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGRcYkvdtK"><g class="v3_i3wktz"><path class="enuncybsk"/><path class="hyr8-8bhd"/><path class="ha34b3bre"/></g></mask></defs><path mask="url(#SVGRcYkvdtK)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:multi-function-knife"} {...others} />);
}

export default Component;
