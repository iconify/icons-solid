import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/esy6n4bsg.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="esy6n4bsg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:transgender-sharp"} {...others} />);
}

export default Component;
