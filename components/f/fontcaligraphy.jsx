import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sf5x249yi.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="sf5x249yi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:fontcaligraphy"} {...others} />);
}

export default Component;
