import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/w/wtnpixb-s.css';
import '../../css/x/xff5tx9kz.css';
import '../../css/y/ytdu-x5xr.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGdLAyjlIH"><g class="v3_i3wktz"><path class="wtnpixb-s"/><path class="xff5tx9kz"/><path class="ytdu-x5xr"/></g></mask></defs><path mask="url(#SVGdLAyjlIH)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:treasure-chest"} {...others} />);
}

export default Component;
