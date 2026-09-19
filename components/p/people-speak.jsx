import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/p/pzosztbse.css';
import '../../css/b/bdousj5fz.css';
import '../../css/y/ylhp4cc8g.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGb60Z6dhn"><g class="aql7dnt-u"><path class="pzosztbse"/><path class="bdousj5fz"/><path class="ylhp4cc8g"/></g></mask></defs><path mask="url(#SVGb60Z6dhn)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:people-speak"} {...others} />);
}

export default Component;
