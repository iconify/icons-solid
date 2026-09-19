import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nu9x3g38j.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="nu9x3g38j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon-plain:apacheairflow-wordmark"} {...others} />);
}

export default Component;
