import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/d/dki2qy46y.css';
import '../../css/x/xjr1w6faa.css';
import '../../css/x/x1pn6ebie.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGJQGaudKX"><g class="v3_i3wktz"><path class="dki2qy46y"/><path class="xjr1w6faa"/><path class="x1pn6ebie"/></g></mask></defs><path mask="url(#SVGJQGaudKX)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:scale-one"} {...others} />);
}

export default Component;
