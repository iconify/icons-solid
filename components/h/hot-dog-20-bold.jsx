import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tnd4qacir.css';
import '../../css/x/x43eb82dg.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="tnd4qacir"/><path class="x43eb82dg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hot-dog-20-bold"} {...others} />);
}

export default Component;
