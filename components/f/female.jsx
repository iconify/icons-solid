import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/h/h4iej7x0c.css';
import '../../css/o/ogc7ubbfh.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGGXrPvbdT"><g class="v3_i3wktz"><path class="h4iej7x0c"/><path class="ogc7ubbfh"/></g></mask></defs><path mask="url(#SVGGXrPvbdT)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:female"} {...others} />);
}

export default Component;
