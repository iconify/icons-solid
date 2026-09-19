import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/simr-3b3h.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="simr-3b3h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cib:groupon"} {...others} />);
}

export default Component;
