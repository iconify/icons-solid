import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lp3_9h6db.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="lp3_9h6db"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:navigation-right"} {...others} />);
}

export default Component;
