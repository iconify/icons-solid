import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/h/hfbsm1a_v.css';
import '../../css/u/uhz-xs8at.css';
import '../../css/w/w72sghb3d.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGmAzYiRTs"><g class="aql7dnt-u"><path class="hfbsm1a_v"/><path class="uhz-xs8at"/><path class="w72sghb3d"/></g></mask></defs><path mask="url(#SVGmAzYiRTs)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:hanger-two"} {...others} />);
}

export default Component;
