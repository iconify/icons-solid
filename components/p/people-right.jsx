import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/p/pzosztbse.css';
import '../../css/d/dg-ffvvyx.css';
import '../../css/y/ylhp4cc8g.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG4SI30dqX"><g class="aql7dnt-u"><path class="pzosztbse"/><path class="dg-ffvvyx"/><path class="ylhp4cc8g"/></g></mask></defs><path mask="url(#SVG4SI30dqX)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:people-right"} {...others} />);
}

export default Component;
