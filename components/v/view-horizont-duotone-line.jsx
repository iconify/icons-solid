import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/aanlrmbqq.css';
import '../../css/o/oi7oh5xgv.css';
import '../../css/g/gxc47n8-k.css';
import '../../css/a/aeyxu9b2r.css';
import '../../css/w/w49j0rbvv.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVGleBKT6fr"><g class="ft5dv1b6b"><path class="aanlrmbqq"/><path class="oi7oh5xgv"/><path class="gxc47n8-k"/><path class="aeyxu9b2r"/></g></mask></defs><path mask="url(#SVGleBKT6fr)" class="w49j0rbvv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:view-horizont-duotone-line"} {...others} />);
}

export default Component;
