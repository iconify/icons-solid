import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/y/yj4qg8jty.css';
import '../../css/l/lrhr39bkv.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG2HSJ85Qo"><g class="aql7dnt-u"><path class="yj4qg8jty"/><path class="lrhr39bkv"/></g></mask></defs><path mask="url(#SVG2HSJ85Qo)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:heart-ballon"} {...others} />);
}

export default Component;
