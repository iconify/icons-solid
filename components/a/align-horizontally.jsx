import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/v/v5085omnf.css';
import '../../css/w/wsbzt7bwh.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGkwAIXlKx"><g class="v3_i3wktz"><path class="v5085omnf"/><path class="wsbzt7bwh"/></g></mask></defs><path mask="url(#SVGkwAIXlKx)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:align-horizontally"} {...others} />);
}

export default Component;
