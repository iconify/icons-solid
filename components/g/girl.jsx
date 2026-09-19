import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/m/mg6s-wbot.css';
import '../../css/r/r1k7lebmh.css';
import '../../css/u/uettqb7vg.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGIbtuRbIO"><g class="aql7dnt-u"><circle class="mg6s-wbot"/><path class="r1k7lebmh"/><path class="uettqb7vg"/></g></mask></defs><path mask="url(#SVGIbtuRbIO)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:girl"} {...others} />);
}

export default Component;
