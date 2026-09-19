import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hv130ab-t.css';
import '../../css/x/x93rdmd5d.css';
import '../../css/y/yvibkqbla.css';
import '../../css/y/yms0hyb2t.css';
import '../../css/j/j3d5ycb4e.css';
import '../../css/d/dmg-7rblv.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGiKItZbcd"><g class="hv130ab-t"><rect class="x93rdmd5d"/><path class="yvibkqbla"/><path class="yms0hyb2t"/><path class="j3d5ycb4e"/><path class="dmg-7rblv"/></g></mask></defs><path mask="url(#SVGiKItZbcd)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:luggage"} {...others} />);
}

export default Component;
