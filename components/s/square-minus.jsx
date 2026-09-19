import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n32go5b0t.css';

const viewBox = {"width":448,"height":512};
const content = `<path class="n32go5b0t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-regular:square-minus"} {...others} />);
}

export default Component;
