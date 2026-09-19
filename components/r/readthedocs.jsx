import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s_k8d7bal.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="s_k8d7bal"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:readthedocs"} {...others} />);
}

export default Component;
