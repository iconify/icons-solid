import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n-h3xgbno.css';
import '../../css/k/k-2dhebbn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n-h3xgbno"/><path class="k-2dhebbn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:gauge-dashboard-bold"} {...others} />);
}

export default Component;
