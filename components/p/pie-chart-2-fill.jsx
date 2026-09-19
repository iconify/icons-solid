import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d9srj5bbq.css';
import '../../css/w/w81_4cfys.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="d9srj5bbq"/><path class="w81_4cfys"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eva:pie-chart-2-fill"} {...others} />);
}

export default Component;
