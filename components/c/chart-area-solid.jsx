import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x5m8x1bgo.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="x5m8x1bgo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:chart-area-solid"} {...others} />);
}

export default Component;
