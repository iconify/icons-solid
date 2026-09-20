import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufww38b4l.css';

const viewBox = {"width":40,"height":40};
const content = `<path class="ufww38b4l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iwwa:arrow-down"} {...others} />);
}

export default Component;
