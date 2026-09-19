import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/z/zbocpbbaf.css';
import '../../css/m/my85mgn3v.css';
import '../../css/w/wxrtcfo2g.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGfBZ0Dcan"><g class="rohhhzb0l"><path class="zbocpbbaf"/><circle class="my85mgn3v"/><path class="wxrtcfo2g"/></g></mask></defs><path mask="url(#SVGfBZ0Dcan)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:folder-search"} {...others} />);
}

export default Component;
