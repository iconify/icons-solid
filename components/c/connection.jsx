import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/r/rby7vyvff.css';
import '../../css/l/lbbuy_5gm.css';
import '../../css/z/z6uqbqdji.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGXtRy0c8x"><g class="v3_i3wktz"><path class="rby7vyvff"/><path class="lbbuy_5gm"/><path class="z6uqbqdji"/></g></mask></defs><path mask="url(#SVGXtRy0c8x)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:connection"} {...others} />);
}

export default Component;
