import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wt4w5s_mf.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="wt4w5s_mf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:overweight-person"} {...others} />);
}

export default Component;
