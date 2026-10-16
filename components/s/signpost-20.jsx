import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uma6ucy9m.css';
import '../../css/f/f-a0_gbpc.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="uma6ucy9m"/><path class="f-a0_gbpc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:signpost-20"} {...others} />);
}

export default Component;
