import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ik9ampb2g.css';

const viewBox = {"width":1200,"height":1200};
const content = `<path class="ik9ampb2g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"el:list"} {...others} />);
}

export default Component;
