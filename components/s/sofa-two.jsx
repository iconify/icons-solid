import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zfjz56b-b.css';
import '../../css/v/vhmqj7bwp.css';
import '../../css/r/rhfc70guf.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG89Y2hdoo"><g class="ft5dv1b6b"><path class="zfjz56b-b"/><path class="vhmqj7bwp"/><path clip-rule="evenodd" class="rhfc70guf"/></g></mask></defs><path mask="url(#SVG89Y2hdoo)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:sofa-two"} {...others} />);
}

export default Component;
