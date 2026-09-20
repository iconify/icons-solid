import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h2dx9kmgv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h2dx9kmgv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:battery-2-charge-line"} {...others} />);
}

export default Component;
