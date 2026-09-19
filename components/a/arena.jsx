import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u4e4mlb2g.css';
import '../../css/z/zhcnnrbqz.css';
import '../../css/y/yg0-h_7ex.css';
import '../../css/t/tfvzfne0e.css';
import '../../css/y/yhtph-bed.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG2KZNkb0S"><g class="u4e4mlb2g"><path class="zhcnnrbqz"/><path class="yg0-h_7ex"/><path class="tfvzfne0e"/><path class="yhtph-bed"/></g></mask></defs><path mask="url(#SVG2KZNkb0S)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:arena"} {...others} />);
}

export default Component;
