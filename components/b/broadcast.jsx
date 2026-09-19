import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/b/bt07rbbav.css';
import '../../css/q/qczan3bwo.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGGzBIqcAm"><g class="v3_i3wktz"><path class="bt07rbbav"/><path class="qczan3bwo"/></g></mask></defs><path mask="url(#SVGGzBIqcAm)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:broadcast"} {...others} />);
}

export default Component;
