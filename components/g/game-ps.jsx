import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/a/avkjhg7eh.css';
import '../../css/a/aeyefqb0j.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGanREEdZE"><g class="v3_i3wktz"><path class="avkjhg7eh"/><path class="aeyefqb0j"/></g></mask></defs><path mask="url(#SVGanREEdZE)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:game-ps"} {...others} />);
}

export default Component;
