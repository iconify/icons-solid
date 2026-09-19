import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/r/rcj_7sg0m.css';
import '../../css/x/xagzqcc9t.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGpMgtVCXv"><g class="aql7dnt-u"><path class="rcj_7sg0m"/><path class="xagzqcc9t"/></g></mask></defs><path mask="url(#SVGpMgtVCXv)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:surveillance-cameras-two"} {...others} />);
}

export default Component;
