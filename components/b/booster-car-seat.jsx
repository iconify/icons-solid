import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/r/rpgkwxltk.css';
import '../../css/b/bhf31340n.css';
import '../../css/p/pswfvabxt.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGgW23db9N"><g class="aql7dnt-u"><path class="rpgkwxltk"/><path class="bhf31340n"/><path class="pswfvabxt"/></g></mask></defs><path mask="url(#SVGgW23db9N)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:booster-car-seat"} {...others} />);
}

export default Component;
