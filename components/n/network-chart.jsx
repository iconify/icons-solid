import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/trq-q2bnu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="trq-q2bnu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:network-chart"} {...others} />);
}

export default Component;
