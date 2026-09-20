import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ujf-rt6jq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ujf-rt6jq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixelarticons:volume-vibrate"} {...others} />);
}

export default Component;
