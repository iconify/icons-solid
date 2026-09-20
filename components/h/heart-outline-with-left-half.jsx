import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lcb7n_v4a.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="lcb7n_v4a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:heart-outline-with-left-half"} {...others} />);
}

export default Component;
