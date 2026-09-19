import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mb5k4m7rj.css';

const viewBox = {"width":576,"height":512};
const content = `<path class="mb5k4m7rj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:rainbow"} {...others} />);
}

export default Component;
