import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/r/r-8dawoyr.css';
import '../../css/g/g-you1b7c.css';
import '../../css/v/vmbylbb-t.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGh3sIkedk"><g class="rohhhzb0l"><path class="r-8dawoyr"/><path class="g-you1b7c"/><path class="vmbylbb-t"/></g></mask></defs><path mask="url(#SVGh3sIkedk)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:one-to-one"} {...others} />);
}

export default Component;
