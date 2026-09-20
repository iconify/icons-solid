import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k_8qcixqp.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="k_8qcixqp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:chart-diagram-add"} {...others} />);
}

export default Component;
