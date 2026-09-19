import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/c/cf1w4fbaw.css';
import '../../css/r/rpgbrbc4i.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGln6CWcqi"><g class="v3_i3wktz"><path class="cf1w4fbaw"/><path class="rpgbrbc4i"/></g></mask></defs><path mask="url(#SVGln6CWcqi)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:ghost"} {...others} />);
}

export default Component;
