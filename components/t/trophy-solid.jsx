import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jlyo80-8j.css';

const viewBox = {"width":15,"height":15};
const content = `<path clip-rule="evenodd" class="jlyo80-8j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:trophy-solid"} {...others} />);
}

export default Component;
