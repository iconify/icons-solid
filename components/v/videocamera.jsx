import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/p/psxdx4bcl.css';
import '../../css/v/vlm3aubzz.css';
import '../../css/s/s7b7bgbvx.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGkTZIQbNR"><g class="rohhhzb0l"><rect class="psxdx4bcl"/><circle class="vlm3aubzz"/><path class="s7b7bgbvx"/></g></mask></defs><path mask="url(#SVGkTZIQbNR)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:videocamera"} {...others} />);
}

export default Component;
