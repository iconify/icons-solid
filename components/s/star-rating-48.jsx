import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mjzn3h8oq.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="mjzn3h8oq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:star-rating-48"} {...others} />);
}

export default Component;
