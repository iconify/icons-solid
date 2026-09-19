import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/w/w1b9vru5h.css';
import '../../css/f/f4kc0gbbi.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGlASUMbUE"><g class="rohhhzb0l"><path class="w1b9vru5h"/><path class="f4kc0gbbi"/></g></mask></defs><path mask="url(#SVGlASUMbUE)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:lincoln"} {...others} />);
}

export default Component;
