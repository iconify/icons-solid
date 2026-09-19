import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d79_wtv7f.css';
import '../../css/z/zn80d_bpp.css';
import '../../css/v/v0m5xdb6q.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<mask id="ipSRugby0"><g class="ft5dv1b6b"><g clip-path="url(#ipSRugby1)" class="d79_wtv7f"><path class="zn80d_bpp"/></g><defs><clipPath id="ipSRugby1"><path class="v0m5xdb6q"/></clipPath></defs></g></mask><path mask="url(#ipSRugby0)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:rugby"} {...others} />);
}

export default Component;
