import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s7d6iacxt.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="s7d6iacxt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dinkie-icons:no-one-under-eighteen-symbol"} {...others} />);
}

export default Component;
