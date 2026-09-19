import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vqepzlbhh.css';

const viewBox = {"width":464,"height":488};
const content = `<path class="vqepzlbhh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:gowalla-alt"} {...others} />);
}

export default Component;
