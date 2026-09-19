import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o9_-o9owr.css';

const viewBox = {"width":512,"height":496};
const content = `<path class="o9_-o9owr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:bug"} {...others} />);
}

export default Component;
