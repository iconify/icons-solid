import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/j/j3wgoubmz.css';
import '../../css/o/oqzhvoi7w.css';
import '../../css/k/k_a-7jb4j.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG9a2Jtb1W"><g class="v3_i3wktz"><path class="j3wgoubmz"/><path class="oqzhvoi7w"/><path class="k_a-7jb4j"/></g></mask></defs><path mask="url(#SVG9a2Jtb1W)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:mark"} {...others} />);
}

export default Component;
