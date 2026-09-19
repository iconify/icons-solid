import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wo4uwlb_d.css';

const viewBox = {"width":1152,"height":1536};
const content = `<path class="wo4uwlb_d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:unlock-alt"} {...others} />);
}

export default Component;
