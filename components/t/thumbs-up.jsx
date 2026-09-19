import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/d/dt8jlkbav.css';
import '../../css/a/afpz-89xh.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG4Xv1gcFj"><g class="v3_i3wktz"><path class="dt8jlkbav"/><path class="afpz-89xh"/></g></mask></defs><path mask="url(#SVG4Xv1gcFj)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:thumbs-up"} {...others} />);
}

export default Component;
