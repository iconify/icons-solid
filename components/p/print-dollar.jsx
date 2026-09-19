import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dlxe_2blb.css';
import '../../css/t/tum5xlert.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dlxe_2blb"/><path class="tum5xlert"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:print-dollar"} {...others} />);
}

export default Component;
