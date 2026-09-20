import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oy_9tw95l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="oy_9tw95l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:vuejs-line"} {...others} />);
}

export default Component;
