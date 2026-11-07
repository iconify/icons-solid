import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s-lbvibdh.css';
import '../../css/i/i-d-6-4rx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s-lbvibdh"/><path class="i-d-6-4rx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:forbidden-bold-duotone"} {...others} />);
}

export default Component;
