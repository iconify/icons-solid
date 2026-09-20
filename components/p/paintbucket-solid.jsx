import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rr--kk2qu.css';
import '../../css/q/q4g6dlonh.css';

const viewBox = {"width":15,"height":15};
const content = `<path clip-rule="evenodd" class="rr--kk2qu"/><path class="q4g6dlonh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:paintbucket-solid"} {...others} />);
}

export default Component;
