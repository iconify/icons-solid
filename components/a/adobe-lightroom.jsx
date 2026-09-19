import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/u/ua-z8vb0h.css';
import '../../css/f/fa82g9big.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGNszwmciv"><g class="rohhhzb0l"><path class="ua-z8vb0h"/><path class="fa82g9big"/></g></mask></defs><path mask="url(#SVGNszwmciv)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:adobe-lightroom"} {...others} />);
}

export default Component;
