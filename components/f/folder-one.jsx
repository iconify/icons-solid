import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y9kp1qbge.css';
import '../../css/j/jqrq48bfx.css';
import '../../css/u/u2ee67bmr.css';
import '../../css/f/f3w5vlnsq.css';
import '../../css/q/q_2pbxbpq.css';
import '../../css/y/yr9ijebaz.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGMqZElblE"><g class="ft5dv1b6b"><path class="y9kp1qbge"/><circle class="jqrq48bfx"/><path class="u2ee67bmr"/><path class="f3w5vlnsq"/><circle class="q_2pbxbpq"/><path class="yr9ijebaz"/></g></mask></defs><path mask="url(#SVGMqZElblE)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:folder-one"} {...others} />);
}

export default Component;
