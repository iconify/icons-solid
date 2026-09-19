import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/u/u_u4qxbdf.css';
import '../../css/s/s_bhinboa.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGjjK1teKr"><g class="aql7dnt-u"><path class="u_u4qxbdf"/><path class="s_bhinboa"/></g></mask></defs><path mask="url(#SVGjjK1teKr)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:round-trip"} {...others} />);
}

export default Component;
