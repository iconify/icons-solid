import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/x/xrsuk-b2x.css';
import '../../css/g/gcng8vetl.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGQZPoheQf"><g class="v3_i3wktz"><path class="xrsuk-b2x"/><path class="gcng8vetl"/></g></mask></defs><path mask="url(#SVGQZPoheQf)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:home-two"} {...others} />);
}

export default Component;
