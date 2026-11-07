import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nsna8m2xi.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="nsna8m2xi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:bobcoin-consumption"} {...others} />);
}

export default Component;
