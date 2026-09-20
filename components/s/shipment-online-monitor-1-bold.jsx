import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cx238s3yb.css';
import '../../css/f/fi7cdacqj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cx238s3yb"/><path class="fi7cdacqj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:shipment-online-monitor-1-bold"} {...others} />);
}

export default Component;
