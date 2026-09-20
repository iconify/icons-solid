import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d7b-_ybbn.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="d7b-_ybbn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:volume-2-outline"} {...others} />);
}

export default Component;
