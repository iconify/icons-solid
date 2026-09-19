import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/e/e9vhvzbmu.css';
import '../../css/l/ld8emebna.css';
import '../../css/y/y0nz_jbwv.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGfWYD4dij"><g class="aql7dnt-u"><path class="e9vhvzbmu"/><path class="ld8emebna"/><rect class="y0nz_jbwv"/></g></mask></defs><path mask="url(#SVGfWYD4dij)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:shovel"} {...others} />);
}

export default Component;
