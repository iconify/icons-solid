import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ciy5fzbxp.css';
import '../../css/a/apq2fzbyn.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ciy5fzbxp"/><path class="apq2fzbyn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:sun-bolt-20"} {...others} />);
}

export default Component;
