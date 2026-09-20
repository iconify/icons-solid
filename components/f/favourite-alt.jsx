import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y57rt9shm.css';

const viewBox = {"width":50,"height":50};
const content = `<path class="y57rt9shm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:favourite-alt"} {...others} />);
}

export default Component;
