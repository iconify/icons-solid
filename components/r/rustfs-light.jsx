import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/en3f2o17m.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="en3f2o17m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:rustfs-light"} {...others} />);
}

export default Component;
