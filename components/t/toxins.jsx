import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/h/h-3fmj80g.css';
import '../../css/p/pf56890je.css';
import '../../css/o/old3i1bqh.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGMtj3lcpQ"><g class="v3_i3wktz"><path clip-rule="evenodd" class="h-3fmj80g"/><path class="pf56890je"/><path class="old3i1bqh"/></g></mask></defs><path mask="url(#SVGMtj3lcpQ)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:toxins"} {...others} />);
}

export default Component;
