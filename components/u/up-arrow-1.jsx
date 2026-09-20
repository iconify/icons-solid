import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m79bmj2zg.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="m79bmj2zg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"subway:up-arrow-1"} {...others} />);
}

export default Component;
