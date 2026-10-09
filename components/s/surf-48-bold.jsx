import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nu6ys3bzz.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="nu6ys3bzz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:surf-48-bold"} {...others} />);
}

export default Component;
