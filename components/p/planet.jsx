import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/u/u3yqhguoj.css';
import '../../css/v/van1pxdhn.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGPzpkEcud"><g class="v3_i3wktz"><path class="u3yqhguoj"/><path class="van1pxdhn"/></g></mask></defs><path mask="url(#SVGPzpkEcud)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:planet"} {...others} />);
}

export default Component;
