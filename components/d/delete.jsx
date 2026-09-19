import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/b/bdgvcmbxg.css';
import '../../css/m/m930bgbyr.css';
import '../../css/z/z5kq_inri.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGN3vajc4e"><g class="v3_i3wktz"><path class="bdgvcmbxg"/><path class="m930bgbyr"/><path class="z5kq_inri"/></g></mask></defs><path mask="url(#SVGN3vajc4e)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:delete"} {...others} />);
}

export default Component;
