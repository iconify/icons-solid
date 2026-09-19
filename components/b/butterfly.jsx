import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/r/rim5m_bhc.css';
import '../../css/h/hvz5n6bel.css';
import '../../css/g/gn6ol4bzw.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGJ58eEd4H"><g class="aql7dnt-u"><path class="rim5m_bhc"/><path class="hvz5n6bel"/><path class="gn6ol4bzw"/></g></mask></defs><path mask="url(#SVGJ58eEd4H)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:butterfly"} {...others} />);
}

export default Component;
