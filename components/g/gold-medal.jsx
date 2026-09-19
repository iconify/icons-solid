import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/u/uzp-9v4km.css';
import '../../css/j/jb1pa2bvo.css';
import '../../css/i/ij785dbcr.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGnTGjXbYS"><g class="aql7dnt-u"><path class="uzp-9v4km"/><path class="jb1pa2bvo"/><path class="ij785dbcr"/></g></mask></defs><path mask="url(#SVGnTGjXbYS)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:gold-medal"} {...others} />);
}

export default Component;
