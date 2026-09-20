import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2m49ccqe.css';

const viewBox = {"width":50,"height":50};
const content = `<path class="k2m49ccqe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"map:map-pin"} {...others} />);
}

export default Component;
