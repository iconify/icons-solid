import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/y/yshai7wmg.css';
import '../../css/d/d0h37k-hr.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGg925Sm1k"><g class="v3_i3wktz"><path class="yshai7wmg"/><path class="d0h37k-hr"/></g></mask></defs><path mask="url(#SVGg925Sm1k)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:write"} {...others} />);
}

export default Component;
