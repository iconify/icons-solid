import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/v/v9jvlqb3d.css';
import '../../css/f/fvk6mt17r.css';
import '../../css/l/lx86l0pzx.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGnVrMhbpH"><g class="aql7dnt-u"><path class="v9jvlqb3d"/><rect class="fvk6mt17r"/><path class="lx86l0pzx"/></g></mask></defs><path mask="url(#SVGnVrMhbpH)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:newlybuild"} {...others} />);
}

export default Component;
