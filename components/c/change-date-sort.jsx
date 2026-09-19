import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/o/on1kopb6o.css';
import '../../css/n/n13l5ubmj.css';
import '../../css/x/xkitpccfs.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGHmrOQevo"><g class="v3_i3wktz"><path class="on1kopb6o"/><path class="n13l5ubmj"/><path class="xkitpccfs"/></g></mask></defs><path mask="url(#SVGHmrOQevo)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:change-date-sort"} {...others} />);
}

export default Component;
