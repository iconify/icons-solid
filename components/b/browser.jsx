import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d3gebbbqf.css';
import '../../css/c/cipl_2bab.css';
import '../../css/r/r5j0fgdnc.css';
import '../../css/w/wslm_vb9c.css';

const viewBox = {"width":16,"height":16};
const content = `<ellipse class="d3gebbbqf"/><path class="cipl_2bab"/><ellipse class="r5j0fgdnc"/><path class="wslm_vb9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nimbus:browser"} {...others} />);
}

export default Component;
