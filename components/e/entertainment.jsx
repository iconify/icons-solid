import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/q/qipc3dbbk.css';
import '../../css/a/ax2murb2d.css';
import '../../css/q/qg-fvrb0k.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGFtOXScGc"><g class="v3_i3wktz"><path class="qipc3dbbk"/><path class="ax2murb2d"/><path class="qg-fvrb0k"/></g></mask></defs><path mask="url(#SVGFtOXScGc)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:entertainment"} {...others} />);
}

export default Component;
