import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ytzgxbc7q.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="ytzgxbc7q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:magsafe-solid"} {...others} />);
}

export default Component;
