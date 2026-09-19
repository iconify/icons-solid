import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r5ke29wou.css';
import '../../css/r/rftmvky-i.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGBKRtqbaD"><g class="ft5dv1b6b"><rect class="r5ke29wou"/><path class="rftmvky-i"/></g></mask></defs><path mask="url(#SVGBKRtqbaD)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:reduce-two"} {...others} />);
}

export default Component;
