import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qpslu009k.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qpslu009k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:arrow-data-transfer-horizontal"} {...others} />);
}

export default Component;
