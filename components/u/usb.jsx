import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/d/dnwl0o7kh.css';
import '../../css/t/t3p6ajbsy.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGjy7d7bhu"><g class="v3_i3wktz"><path class="dnwl0o7kh"/><path class="t3p6ajbsy"/></g></mask></defs><path mask="url(#SVGjy7d7bhu)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:usb"} {...others} />);
}

export default Component;
