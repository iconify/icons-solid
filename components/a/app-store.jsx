import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/u/ua-z8vb0h.css';
import '../../css/z/zu0gdeclu.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGww5Pbcfx"><g class="rohhhzb0l"><path class="ua-z8vb0h"/><path class="zu0gdeclu"/></g></mask></defs><path mask="url(#SVGww5Pbcfx)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:app-store"} {...others} />);
}

export default Component;
