import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ln0v0fbwf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ln0v0fbwf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:repeat-one-fill-round"} {...others} />);
}

export default Component;
