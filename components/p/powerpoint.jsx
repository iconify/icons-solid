import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/h/h9qj9o6mz.css';
import '../../css/q/q-vig9vwl.css';
import '../../css/s/sl781pbgn.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGlOyaldLm"><g class="rohhhzb0l"><rect class="h9qj9o6mz"/><path class="q-vig9vwl"/><path class="sl781pbgn"/></g></mask></defs><path mask="url(#SVGlOyaldLm)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:powerpoint"} {...others} />);
}

export default Component;
