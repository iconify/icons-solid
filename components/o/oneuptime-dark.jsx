import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g1zc5nbtf.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="g1zc5nbtf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:oneuptime-dark"} {...others} />);
}

export default Component;
