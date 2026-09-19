import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/w/wnnt2d18d.css';
import '../../css/f/flzcbdc4z.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGVD5AleDS"><g class="aql7dnt-u"><ellipse class="wnnt2d18d"/><path class="flzcbdc4z"/></g></mask></defs><path mask="url(#SVGVD5AleDS)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:potentiometer"} {...others} />);
}

export default Component;
