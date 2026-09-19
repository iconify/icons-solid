import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/r/r-3ti3tas.css';
import '../../css/v/v7tv4gjxm.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG6G40NcYd"><g class="v3_i3wktz"><path class="r-3ti3tas"/><path class="v7tv4gjxm"/></g></mask></defs><path mask="url(#SVG6G40NcYd)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:road-sign"} {...others} />);
}

export default Component;
