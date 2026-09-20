import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ea-644bal.css';
import '../../css/i/iwz5x-bvn.css';

const viewBox = {"width":15,"height":15};
const content = `<path clip-rule="evenodd" class="ea-644bal"/><path class="iwz5x-bvn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:pool-solid"} {...others} />);
}

export default Component;
