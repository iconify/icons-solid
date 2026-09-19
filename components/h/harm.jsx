import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/g/gj7m2tbbh.css';
import '../../css/j/j7j-p3g_y.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGttcsRdKb"><g class="v3_i3wktz"><path class="gj7m2tbbh"/><path class="j7j-p3g_y"/></g></mask></defs><path mask="url(#SVGttcsRdKb)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:harm"} {...others} />);
}

export default Component;
