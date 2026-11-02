import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yvf7rqj5c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yvf7rqj5c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:paw-fill"} {...others} />);
}

export default Component;
