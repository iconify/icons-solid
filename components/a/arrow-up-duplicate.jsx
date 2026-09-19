import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m-ue__bvy.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="m-ue__bvy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dashicons:arrow-up-duplicate"} {...others} />);
}

export default Component;
