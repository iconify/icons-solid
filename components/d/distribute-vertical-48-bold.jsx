import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/ke8gj0i4n.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ke8gj0i4n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:distribute-vertical-48-bold"} {...others} />);
}

export default Component;
