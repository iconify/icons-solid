import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d5y6u0b0o.css';
import '../../css/x/xae0rp4bl.css';
import '../../css/l/la9bgmbhx.css';
import '../../css/n/n3ohdctwg.css';
import '../../css/d/d9v975iov.css';
import '../../css/d/drcavob_n.css';
import '../../css/x/xys8atbnv.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVGOBEkQbnV" width="5.33" height="16.67" x="9.33" y="5.33" maskUnits="userSpaceOnUse"><path class="d5y6u0b0o"/></mask></defs><path class="xae0rp4bl"/><path mask="url(#SVGOBEkQbnV)" class="la9bgmbhx"/><path class="n3ohdctwg"/><circle class="d9v975iov"/><path class="drcavob_n"/><path class="xys8atbnv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gcp:cloud-healthcare-api"} {...others} />);
}

export default Component;
