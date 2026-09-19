import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/n/nr6ltb85s.css';
import '../../css/q/q6-g7vdkb.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGHwHCXTDV"><g class="aql7dnt-u"><path clip-rule="evenodd" class="nr6ltb85s"/><path class="q6-g7vdkb"/></g></mask></defs><path mask="url(#SVGHwHCXTDV)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:connect"} {...others} />);
}

export default Component;
