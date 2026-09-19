import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wq9270lis.css';
import '../../css/s/s2k_flldr.css';
import '../../css/y/ynt2pcbub.css';

const viewBox = {"width":300,"height":200};
const content = `<g class="ft5dv1b6b"><path class="wq9270lis"/><path class="s2k_flldr"/><path class="ynt2pcbub"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:ye"} {...others} />);
}

export default Component;
