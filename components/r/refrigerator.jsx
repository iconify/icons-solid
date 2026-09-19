import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/p/pfnw24b8z.css';
import '../../css/b/bjd584byl.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG9wDgcdeE"><g class="v3_i3wktz"><rect class="pfnw24b8z"/><path class="bjd584byl"/></g></mask></defs><path mask="url(#SVG9wDgcdeE)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:refrigerator"} {...others} />);
}

export default Component;
