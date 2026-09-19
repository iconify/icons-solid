import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/adexpl72i.css';
import '../../css/n/n95gqt_fs.css';
import '../../css/v/vt616c4jv.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGebzLibPd"><g class="adexpl72i"><path class="n95gqt_fs"/><path class="vt616c4jv"/></g></mask></defs><path mask="url(#SVGebzLibPd)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:three-hexagons"} {...others} />);
}

export default Component;
