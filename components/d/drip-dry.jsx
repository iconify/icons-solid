import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uvcnwacac.css';

const viewBox = {"width":432,"height":512};
const content = `<path class="uvcnwacac"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:drip-dry"} {...others} />);
}

export default Component;
