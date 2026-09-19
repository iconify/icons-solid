import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k40dcvkuw.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="k40dcvkuw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-regular:arrow-alt-circle-down"} {...others} />);
}

export default Component;
