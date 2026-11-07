import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pv_hji6de.css';
import '../../css/e/e-_t4f13s.css';
import '../../css/f/f5bh_j-5r.css';
import '../../css/c/c937-fbxw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pv_hji6de"/><path class="e-_t4f13s"/><path class="f5bh_j-5r"/><path class="c937-fbxw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:chart-square-bold-duotone"} {...others} />);
}

export default Component;
