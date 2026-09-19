import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jkvtaubuh.css';
import '../../css/l/l6ywx2bpg.css';
import '../../css/x/xaqcxbcrv.css';
import '../../css/u/uyve4wbpr.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGLPRdabqp"><g class="ft5dv1b6b"><rect class="jkvtaubuh"/><path class="l6ywx2bpg"/><rect class="xaqcxbcrv"/><path class="uyve4wbpr"/></g></mask></defs><path mask="url(#SVGLPRdabqp)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:router"} {...others} />);
}

export default Component;
