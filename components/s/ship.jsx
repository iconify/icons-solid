import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/r/rzkc8ryte.css';
import '../../css/y/y785qmzpn.css';
import '../../css/f/fif1ehbkk.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGlwsRHVWn"><g class="v3_i3wktz"><path clip-rule="evenodd" class="rzkc8ryte"/><path class="y785qmzpn"/><path class="fif1ehbkk"/></g></mask></defs><path mask="url(#SVGlwsRHVWn)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:ship"} {...others} />);
}

export default Component;
