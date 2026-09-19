import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/j/jzp86izib.css';
import '../../css/d/d52l-tb8w.css';
import '../../css/f/fbcpkibjw.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGChwPkd1R"><g class="rohhhzb0l"><path clip-rule="evenodd" class="jzp86izib"/><path class="d52l-tb8w"/><path class="fbcpkibjw"/></g></mask></defs><path mask="url(#SVGChwPkd1R)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:prescription"} {...others} />);
}

export default Component;
