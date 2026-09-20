import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/om8ne5bsn.css';
import '../../css/v/vp5lb0bdv.css';
import '../../css/v/vyrqsnbgd.css';
import '../../css/d/dvze_cb8s.css';
import '../../css/f/fbvekfskd.css';
import '../../css/x/x08avq2kw.css';
import '../../css/q/qx4ale-rb.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="om8ne5bsn"/><path class="vp5lb0bdv"/><path class="vyrqsnbgd"/><path class="dvze_cb8s"/><path class="fbvekfskd"/><path class="x08avq2kw"/><path class="qx4ale-rb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:business-user-curriculum"} {...others} />);
}

export default Component;
