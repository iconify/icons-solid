import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lzwd2419d.css';
import '../../css/m/m5myy5blm.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="lzwd2419d"/><path class="m5myy5blm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icomoon-free:sleepy"} {...others} />);
}

export default Component;
