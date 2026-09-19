import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/f/fbo_5_dgq.css';
import '../../css/b/bcycd7i_s.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG441SvbSD"><g class="aql7dnt-u"><path class="fbo_5_dgq"/><path class="bcycd7i_s"/></g></mask></defs><path mask="url(#SVG441SvbSD)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:badge"} {...others} />);
}

export default Component;
