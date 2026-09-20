import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3_-pk3ov.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="l3_-pk3ov"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:wygiwyh-light"} {...others} />);
}

export default Component;
