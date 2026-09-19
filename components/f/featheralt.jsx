import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/ml8beb-zp.css';

const viewBox = {"width":1025,"height":1025};
const content = `<path class="ml8beb-zp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:featheralt"} {...others} />);
}

export default Component;
