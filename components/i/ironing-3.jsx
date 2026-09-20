import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yl2nwrbey.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yl2nwrbey"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:ironing-3"} {...others} />);
}

export default Component;
