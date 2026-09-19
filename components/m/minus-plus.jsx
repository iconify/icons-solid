import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ecu-v9ahp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ecu-v9ahp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:minus-plus"} {...others} />);
}

export default Component;
