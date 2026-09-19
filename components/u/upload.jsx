import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gijfkbcsp.css';

const viewBox = {"width":1664,"height":1600};
const content = `<path class="gijfkbcsp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:upload"} {...others} />);
}

export default Component;
