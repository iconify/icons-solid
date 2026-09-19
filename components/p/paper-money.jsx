import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/a/albrq4bye.css';
import '../../css/q/qpokn5rgz.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGZ6gjYdwG"><g class="v3_i3wktz"><path class="albrq4bye"/><path class="qpokn5rgz"/></g></mask></defs><path mask="url(#SVGZ6gjYdwG)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:paper-money"} {...others} />);
}

export default Component;
