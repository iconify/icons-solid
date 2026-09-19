import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/ttl4pbbwc.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ttl4pbbwc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:crosshair2"} {...others} />);
}

export default Component;
