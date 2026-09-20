import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d5u3m-8_v.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="d5u3m-8_v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:lunar-dark"} {...others} />);
}

export default Component;
