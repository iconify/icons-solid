import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k3d8sv4oq.css';

const viewBox = {"width":25,"height":24};
const content = `<path class="k3d8sv4oq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:expand-square-4"} {...others} />);
}

export default Component;
