import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hoboap-yx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hoboap-yx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:arrow-up-waves-solid"} {...others} />);
}

export default Component;
