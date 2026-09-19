import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/j/j6z07byko.css';
import '../../css/n/np2i0ibph.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGGuoRdbdf"><g class="aql7dnt-u"><path class="j6z07byko"/><path class="np2i0ibph"/></g></mask></defs><path mask="url(#SVGGuoRdbdf)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:clothes-hoodie"} {...others} />);
}

export default Component;
