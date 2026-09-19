import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/z/zvkp0cb3v.css';
import '../../css/h/h1rmlkb4z.css';
import '../../css/t/tofdy-80v.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGTCftzbBY"><g class="v3_i3wktz"><path class="zvkp0cb3v"/><path class="h1rmlkb4z"/><path class="tofdy-80v"/></g></mask></defs><path mask="url(#SVGTCftzbBY)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:shutter-priority"} {...others} />);
}

export default Component;
