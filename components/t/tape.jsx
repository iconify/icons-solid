import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/n/naayrx7_t.css';
import '../../css/n/nnyeuib9r.css';
import '../../css/s/s0zjehfxn.css';
import '../../css/a/a0myg2b6y.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGRFv1Npxo"><g class="v3_i3wktz"><path class="naayrx7_t"/><path clip-rule="evenodd" class="nnyeuib9r"/><path class="s0zjehfxn"/><path class="a0myg2b6y"/></g></mask></defs><path mask="url(#SVGRFv1Npxo)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:tape"} {...others} />);
}

export default Component;
