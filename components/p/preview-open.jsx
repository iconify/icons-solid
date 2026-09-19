import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ylrso7y3c.css';
import '../../css/z/zfnienbkn.css';
import '../../css/v/v3q5wob3k.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG544unEnd"><g class="ylrso7y3c"><path class="zfnienbkn"/><path class="v3q5wob3k"/></g></mask></defs><path mask="url(#SVG544unEnd)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:preview-open"} {...others} />);
}

export default Component;
