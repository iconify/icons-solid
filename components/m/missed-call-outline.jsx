import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dy31kfb6q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dy31kfb6q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flowbite:missed-call-outline"} {...others} />);
}

export default Component;
