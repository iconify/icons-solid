import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pv4q92b1l.css';

const viewBox = {"width":1200,"height":1200};
const content = `<path class="pv4q92b1l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"el:star-empty"} {...others} />);
}

export default Component;
