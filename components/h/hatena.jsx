import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gd7rvbbsg.css';

const viewBox = {"width":819,"height":681};
const content = `<path class="gd7rvbbsg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ls:hatena"} {...others} />);
}

export default Component;
