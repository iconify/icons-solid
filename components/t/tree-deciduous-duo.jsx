import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/z/z17j2_jat.css';
import '../../css/o/ovp7dlb_x.css';
import '../../css/n/nn7f_zb2c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="z17j2_jat"/><path class="ovp7dlb_x wm-a"/><path class="nn7f_zb2c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:tree-deciduous-duo"} {...others} />);
}

export default Component;
