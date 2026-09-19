import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/k/k2j8b1jba.css';
import '../../css/h/h0pebzbkt.css';
import '../../css/i/ik07xqb4l.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGbfJGv2GB"><g class="v3_i3wktz"><path class="k2j8b1jba"/><path class="h0pebzbkt"/><path class="ik07xqb4l"/></g></mask></defs><path mask="url(#SVGbfJGv2GB)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:guide-board"} {...others} />);
}

export default Component;
