import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fhi3h8bds.css';

const viewBox = {"width":1025,"height":1025};
const content = `<path class="fhi3h8bds"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:shovel"} {...others} />);
}

export default Component;
