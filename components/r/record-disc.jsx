import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/j/j-v2u4nhg.css';
import '../../css/o/ojp9--njg.css';
import '../../css/k/krw5o0bvk.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGU1vDUb6k"><g class="v3_i3wktz"><path class="j-v2u4nhg"/><path class="ojp9--njg"/><path class="krw5o0bvk"/></g></mask></defs><path mask="url(#SVGU1vDUb6k)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:record-disc"} {...others} />);
}

export default Component;
