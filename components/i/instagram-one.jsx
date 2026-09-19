import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v1_swcb_o.css';
import '../../css/a/aoabsmt9b.css';
import '../../css/c/cjjtizl0b.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGEIHzIcGC"><g class="v1_swcb_o"><circle class="aoabsmt9b"/><path class="cjjtizl0b"/></g></mask></defs><path mask="url(#SVGEIHzIcGC)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:instagram-one"} {...others} />);
}

export default Component;
