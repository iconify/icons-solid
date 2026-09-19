import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/z/zay1jacum.css';
import '../../css/n/no-fr54cz.css';
import '../../css/x/x0x2libsd.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGEJjvfn0J"><g class="aql7dnt-u"><path class="zay1jacum"/><path class="no-fr54cz"/><path class="x0x2libsd"/></g></mask></defs><path mask="url(#SVGEJjvfn0J)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:video-two"} {...others} />);
}

export default Component;
