import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/t/tia2wlril.css';
import '../../css/f/f75puzyll.css';
import '../../css/w/w4b92-e_m.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGCESdHdzW"><g class="aql7dnt-u"><path class="tia2wlril"/><path class="f75puzyll"/><path class="w4b92-e_m"/></g></mask></defs><path mask="url(#SVGCESdHdzW)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:avocado-one"} {...others} />);
}

export default Component;
