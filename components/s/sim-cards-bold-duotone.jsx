import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s7f9325fo.css';
import '../../css/o/o2n603b_x.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="s7f9325fo"/><path class="o2n603b_x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:sim-cards-bold-duotone"} {...others} />);
}

export default Component;
