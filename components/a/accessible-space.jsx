import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mr_dv5t7u.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="mr_dv5t7u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"temaki:accessible-space"} {...others} />);
}

export default Component;
