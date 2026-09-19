import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/u/ua-z8vb0h.css';
import '../../css/e/ezjw4-bqt.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGlbLTWdGd"><g class="rohhhzb0l"><path class="ua-z8vb0h"/><path class="ezjw4-bqt"/></g></mask></defs><path mask="url(#SVGlbLTWdGd)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:adobe-illustrate"} {...others} />);
}

export default Component;
