import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/f/fngjr_1gm.css';
import '../../css/w/wsc1fl-xl.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGWWivydVe"><g class="v3_i3wktz"><path class="fngjr_1gm"/><path clip-rule="evenodd" class="wsc1fl-xl"/></g></mask></defs><path mask="url(#SVGWWivydVe)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:swallow"} {...others} />);
}

export default Component;
