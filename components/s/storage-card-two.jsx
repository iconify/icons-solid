import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/b/bwpzy-b4l.css';
import '../../css/w/w6ufs9jem.css';
import '../../css/u/uts2ttbfw.css';
import '../../css/s/sunh8ec1l.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGHEPLKWXo"><g class="rohhhzb0l"><rect class="bwpzy-b4l"/><path class="w6ufs9jem"/><path class="uts2ttbfw"/><path class="sunh8ec1l"/></g></mask></defs><path mask="url(#SVGHEPLKWXo)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:storage-card-two"} {...others} />);
}

export default Component;
