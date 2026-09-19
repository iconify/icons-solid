import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tcp9bc3cl.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="tcp9bc3cl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:cloud-data-ops"} {...others} />);
}

export default Component;
