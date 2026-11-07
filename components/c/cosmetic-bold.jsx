import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d9cb8qbxu.css';
import '../../css/d/d7n_wt5my.css';
import '../../css/c/cxt5hpr-p.css';
import '../../css/s/scepf5ivk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="d9cb8qbxu"/><path class="d7n_wt5my"/><path class="cxt5hpr-p"/><path class="scepf5ivk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cosmetic-bold"} {...others} />);
}

export default Component;
