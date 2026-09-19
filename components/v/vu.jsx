import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/a/a2u_w5bup.css';
import '../../css/e/e87e_9z0v.css';
import '../../css/i/iwoqd0a5y.css';
import '../../css/i/i2aga6b0s.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="a2u_w5bup"/><path class="e87e_9z0v"/><path class="iwoqd0a5y"/><path class="i2aga6b0s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:vu"} {...others} />);
}

export default Component;
