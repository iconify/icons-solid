import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/h/hxivbubpu.css';
import '../../css/j/jgw8fgb3y.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGfpU5Mqnm"><g class="v3_i3wktz"><path class="hxivbubpu"/><path class="jgw8fgb3y"/></g></mask></defs><path mask="url(#SVGfpU5Mqnm)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:order"} {...others} />);
}

export default Component;
