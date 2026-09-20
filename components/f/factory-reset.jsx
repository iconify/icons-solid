import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/an6_-bb4y.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="an6_-bb4y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:factory-reset"} {...others} />);
}

export default Component;
