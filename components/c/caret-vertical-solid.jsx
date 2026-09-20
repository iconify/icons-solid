import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b4l_n6szq.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="b4l_n6szq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:caret-vertical-solid"} {...others} />);
}

export default Component;
