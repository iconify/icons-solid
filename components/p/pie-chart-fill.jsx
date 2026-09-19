import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kj_jthbsa.css';
import '../../css/w/w81_4cfys.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kj_jthbsa"/><path class="w81_4cfys"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eva:pie-chart-fill"} {...others} />);
}

export default Component;
