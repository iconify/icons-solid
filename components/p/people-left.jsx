import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/p/pzosztbse.css';
import '../../css/o/ok1ev1wiw.css';
import '../../css/y/ylhp4cc8g.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGJuDhBeiy"><g class="aql7dnt-u"><path class="pzosztbse"/><path class="ok1ev1wiw"/><path class="ylhp4cc8g"/></g></mask></defs><path mask="url(#SVGJuDhBeiy)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:people-left"} {...others} />);
}

export default Component;
