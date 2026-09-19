import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/d/d9ti0tfzb.css';
import '../../css/w/wjxv5acdy.css';
import '../../css/z/zd3-8ac-t.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGPAt0feET"><g class="v3_i3wktz"><path class="d9ti0tfzb"/><path class="wjxv5acdy"/><path clip-rule="evenodd" class="zd3-8ac-t"/></g></mask></defs><path mask="url(#SVGPAt0feET)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:group"} {...others} />);
}

export default Component;
