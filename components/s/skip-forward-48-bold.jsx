import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sgxm3zihq.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="sgxm3zihq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:skip-forward-48-bold"} {...others} />);
}

export default Component;
