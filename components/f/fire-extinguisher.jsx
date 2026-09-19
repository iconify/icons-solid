import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ng3k04byj.css';

const viewBox = {"width":1408,"height":1632};
const content = `<path class="ng3k04byj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:fire-extinguisher"} {...others} />);
}

export default Component;
