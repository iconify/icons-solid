import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/j/j-v2u4nhg.css';
import '../../css/q/qlm1r95dg.css';
import '../../css/a/a9pjw4axx.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGEqZMiddS"><g class="v3_i3wktz"><path class="j-v2u4nhg"/><path class="qlm1r95dg"/><circle class="a9pjw4axx"/></g></mask></defs><path mask="url(#SVGEqZMiddS)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:winking-face-with-open-eyes"} {...others} />);
}

export default Component;
