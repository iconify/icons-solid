import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t4hwwfb8g.css';

const viewBox = {"width":1984,"height":1408};
const content = `<path class="t4hwwfb8g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:wifi"} {...others} />);
}

export default Component;
