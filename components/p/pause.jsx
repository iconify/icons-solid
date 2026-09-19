import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fyupctqcd.css';

const viewBox = {"width":9.12,"height":16};
const content = `<path class="fyupctqcd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"formkit:pause"} {...others} />);
}

export default Component;
