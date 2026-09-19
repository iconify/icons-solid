import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/l/lbuozbbbq.css';
import '../../css/n/n5j6wubbb.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGN0XfybUI"><g class="aql7dnt-u"><rect class="lbuozbbbq"/><path class="n5j6wubbb"/></g></mask></defs><path mask="url(#SVGN0XfybUI)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:multi-picture-carousel"} {...others} />);
}

export default Component;
