import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/f/f2ykp2y6k.css';
import '../../css/z/zxfgzy9hk.css';
import '../../css/s/s0vg7idxu.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGFes5IeWL"><g class="aql7dnt-u"><path class="f2ykp2y6k"/><path class="zxfgzy9hk"/><path class="s0vg7idxu"/></g></mask></defs><path mask="url(#SVGFes5IeWL)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:double-bed"} {...others} />);
}

export default Component;
