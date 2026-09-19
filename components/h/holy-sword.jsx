import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/a/alx8q2bso.css';
import '../../css/a/as6-xr61g.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGWZkSzcLz"><g class="aql7dnt-u"><path class="alx8q2bso"/><path class="as6-xr61g"/></g></mask></defs><path mask="url(#SVGWZkSzcLz)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:holy-sword"} {...others} />);
}

export default Component;
