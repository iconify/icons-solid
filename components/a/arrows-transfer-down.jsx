import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/va7509xco.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="va7509xco"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:arrows-transfer-down"} {...others} />);
}

export default Component;
