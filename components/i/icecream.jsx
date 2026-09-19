import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/v/vjps25b7w.css';
import '../../css/v/vg7mwkb0m.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGGw1hKdJF"><g class="rohhhzb0l"><path class="vjps25b7w"/><path class="vg7mwkb0m"/></g></mask></defs><path mask="url(#SVGGw1hKdJF)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:icecream"} {...others} />);
}

export default Component;
