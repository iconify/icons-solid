import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jaecykbpq.css';
import '../../css/c/cpwp98h5v.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="jaecykbpq"/><path class="cpwp98h5v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:error-outline"} {...others} />);
}

export default Component;
