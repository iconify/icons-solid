import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/o/o8s2cpv2k.css';
import '../../css/j/jy0gxjb-v.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGdzEbUc2s"><g class="aql7dnt-u"><path class="o8s2cpv2k"/><path class="jy0gxjb-v"/></g></mask></defs><path mask="url(#SVGdzEbUc2s)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:label"} {...others} />);
}

export default Component;
