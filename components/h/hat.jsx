import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/o/o3y-mwb9w.css';
import '../../css/i/iewq-3_sp.css';
import '../../css/f/fi8jscb1n.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGj935KcSj"><g class="aql7dnt-u"><path class="o3y-mwb9w"/><rect class="iewq-3_sp"/><path class="fi8jscb1n"/></g></mask></defs><path mask="url(#SVGj935KcSj)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:hat"} {...others} />);
}

export default Component;
