import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sw96g0b-t.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="sw96g0b-t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:llama-cpp-dark"} {...others} />);
}

export default Component;
