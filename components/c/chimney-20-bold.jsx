import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nujs77b5j.css';
import '../../css/h/hw94v6bup.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="nujs77b5j"/><path class="hw94v6bup"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:chimney-20-bold"} {...others} />);
}

export default Component;
