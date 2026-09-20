import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p8z_old3b.css';
import '../../css/k/kuqu3-gbx.css';
import '../../css/b/b4mo-ib8s.css';
import '../../css/s/s0npv_cua.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="p8z_old3b"/><path class="kuqu3-gbx"/><path class="b4mo-ib8s"/><path class="s0npv_cua"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:office-clipper"} {...others} />);
}

export default Component;
