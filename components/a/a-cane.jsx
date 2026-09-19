import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p_gv6ibcq.css';
import '../../css/v/v0m5xdb6q.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<mask id="svgIDb"><g class="ft5dv1b6b"><g clip-path="url(#svgIDa)"><path class="p_gv6ibcq"/></g><defs><clipPath id="svgIDa"><path class="v0m5xdb6q"/></clipPath></defs></g></mask><path mask="url(#svgIDb)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:a-cane"} {...others} />);
}

export default Component;
