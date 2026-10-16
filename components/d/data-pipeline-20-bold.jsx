import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lj7euhm1y.css';
import '../../css/h/h17jzb6dy.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="lj7euhm1y"/><path class="h17jzb6dy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:data-pipeline-20-bold"} {...others} />);
}

export default Component;
