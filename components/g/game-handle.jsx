import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/a/ay21un4ba.css';
import '../../css/i/iv0tfobzy.css';
import '../../css/b/b9aamtbca.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGHRAHueGK"><g class="v3_i3wktz"><path class="ay21un4ba"/><path class="iv0tfobzy"/><path class="b9aamtbca"/></g></mask></defs><path mask="url(#SVGHRAHueGK)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:game-handle"} {...others} />);
}

export default Component;
