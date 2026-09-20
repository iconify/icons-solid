import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e2xd09b8a.css';

const viewBox = {"width":8,"height":8};
const content = `<path class="e2xd09b8a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oi:arrow-thick-left"} {...others} />);
}

export default Component;
