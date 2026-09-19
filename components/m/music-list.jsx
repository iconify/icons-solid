import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/y/yar0blewo.css';
import '../../css/q/q1p59-bwi.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGcjPRwd1o"><g class="v3_i3wktz"><path class="yar0blewo"/><path class="q1p59-bwi"/></g></mask></defs><path mask="url(#SVGcjPRwd1o)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:music-list"} {...others} />);
}

export default Component;
