import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ugquq8b_b.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="ugquq8b_b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:plug-with-bolt"} {...others} />);
}

export default Component;
