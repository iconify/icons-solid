import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ion_h5bia.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ion_h5bia"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:lily-xl-alt"} {...others} />);
}

export default Component;
