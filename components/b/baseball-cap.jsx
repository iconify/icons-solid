import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/h/ho2pnibko.css';
import '../../css/a/apvo4cjdv.css';
import '../../css/d/dpz15i3hu.css';
import '../../css/p/pee0w9b0l.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGrTTwec2P"><g class="rohhhzb0l"><path class="ho2pnibko"/><path class="apvo4cjdv"/><rect class="dpz15i3hu"/><circle class="pee0w9b0l"/></g></mask></defs><path mask="url(#SVGrTTwec2P)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:baseball-cap"} {...others} />);
}

export default Component;
