import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/w/wsbzt7bwh.css';
import '../../css/u/u5n78mb4p.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG6Pg9PcBN"><g class="v3_i3wktz"><path class="wsbzt7bwh"/><path class="u5n78mb4p"/></g></mask></defs><path mask="url(#SVG6Pg9PcBN)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:flip-horizontally"} {...others} />);
}

export default Component;
