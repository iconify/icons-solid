import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lf7v7crei.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lf7v7crei"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:notification-off-fill"} {...others} />);
}

export default Component;
