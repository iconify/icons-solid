import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/u/uw9rzrb8v.css';
import '../../css/c/ccyl2j98s.css';
import '../../css/l/lvkcdpcik.css';
import '../../css/l/lpok977mo.css';
import '../../css/q/qm_hwpb0e.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGVRMbB5NW"><g class="aql7dnt-u"><circle transform="rotate(40 30.075 15.562)" class="uw9rzrb8v"/><path class="ccyl2j98s"/><circle transform="rotate(40 11.24 19.34)" class="lvkcdpcik"/><circle transform="rotate(40 28.462 37.707)" class="lpok977mo"/><path class="qm_hwpb0e"/></g></mask></defs><path mask="url(#SVGVRMbB5NW)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:rattle"} {...others} />);
}

export default Component;
