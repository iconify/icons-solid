import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/y/y-0f4nbla.css';
import '../../css/q/qy-xuybra.css';
import '../../css/h/hk92wwirk.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGuhemE7Xx"><g class="rohhhzb0l"><path class="y-0f4nbla"/><path class="qy-xuybra"/><path class="hk92wwirk"/></g></mask></defs><path mask="url(#SVGuhemE7Xx)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:bring-to-front"} {...others} />);
}

export default Component;
