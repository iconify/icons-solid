import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o8f3r6nli.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="o8f3r6nli"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:8mb-local-dark"} {...others} />);
}

export default Component;
