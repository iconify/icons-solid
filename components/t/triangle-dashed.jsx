import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y2b_itrtk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="y2b_itrtk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:triangle-dashed"} {...others} />);
}

export default Component;
