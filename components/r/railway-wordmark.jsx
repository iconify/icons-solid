import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pqcv97bsg.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="pqcv97bsg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:railway-wordmark"} {...others} />);
}

export default Component;
