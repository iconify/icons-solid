import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tc9q056bm.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="tc9q056bm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:michigan-upper-peninsula"} {...others} />);
}

export default Component;
