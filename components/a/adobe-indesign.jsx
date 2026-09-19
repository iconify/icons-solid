import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/u/ua-z8vb0h.css';
import '../../css/o/ob5x3zuiv.css';
import '../../css/b/bacrhyx6o.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGIgOVqbso"><g class="rohhhzb0l"><path class="ua-z8vb0h"/><path class="ob5x3zuiv"/><path clip-rule="evenodd" class="bacrhyx6o"/></g></mask></defs><path mask="url(#SVGIgOVqbso)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:adobe-indesign"} {...others} />);
}

export default Component;
