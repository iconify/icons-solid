import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y7jcvhozx.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="y7jcvhozx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:linguacafe-dark"} {...others} />);
}

export default Component;
