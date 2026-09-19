import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/x/xlq2m0blx.css';
import '../../css/p/pot_04b4h.css';
import '../../css/d/dqujb-3pm.css';
import '../../css/j/jtilm806p.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGlRr3teka"><g class="v3_i3wktz"><path class="xlq2m0blx"/><path class="pot_04b4h"/><path class="dqujb-3pm"/><path class="jtilm806p"/></g></mask></defs><path mask="url(#SVGlRr3teka)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:fire-extinguisher-one"} {...others} />);
}

export default Component;
