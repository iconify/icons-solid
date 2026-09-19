import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ylrso7y3c.css';
import '../../css/r/r8cyu3bwz.css';
import '../../css/s/s_lvzkjgq.css';
import '../../css/z/zmxxr194t.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG24BLRc5o"><g class="ylrso7y3c"><rect class="r8cyu3bwz"/><path class="s_lvzkjgq"/><path class="zmxxr194t"/></g></mask></defs><path mask="url(#SVG24BLRc5o)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:figma"} {...others} />);
}

export default Component;
