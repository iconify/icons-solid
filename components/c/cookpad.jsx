import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f6mz-dumd.css';

const viewBox = {"width":717,"height":717};
const content = `<path class="f6mz-dumd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ls:cookpad"} {...others} />);
}

export default Component;
