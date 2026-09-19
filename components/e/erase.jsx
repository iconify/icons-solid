import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/d/dz0jc1b4h.css';
import '../../css/v/v0o_d4v2z.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGkIYomc5k"><g class="aql7dnt-u"><path class="dz0jc1b4h"/><path class="v0o_d4v2z"/></g></mask></defs><path mask="url(#SVGkIYomc5k)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:erase"} {...others} />);
}

export default Component;
