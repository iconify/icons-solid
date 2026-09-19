import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/w/wcw_oo5tg.css';
import '../../css/x/xgjnkbdze.css';
import '../../css/i/i-3wzrbog.css';
import '../../css/x/xbnmjoblf.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGgro8Qb2k"><g class="rohhhzb0l"><path class="wcw_oo5tg"/><path class="xgjnkbdze"/><path class="i-3wzrbog"/><path class="xbnmjoblf"/></g></mask></defs><path mask="url(#SVGgro8Qb2k)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:set-off"} {...others} />);
}

export default Component;
