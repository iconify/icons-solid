import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/erstu9bfm.css';
import '../../css/z/zi8delbng.css';
import '../../css/s/sahdhwl_a.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="erstu9bfm"/><path class="zi8delbng"/><path class="sahdhwl_a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:blade-transport-20-bold"} {...others} />);
}

export default Component;
