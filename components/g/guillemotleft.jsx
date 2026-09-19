import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kuiynvcqs.css';

const viewBox = {"width":516,"height":614};
const content = `<path class="kuiynvcqs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ls:guillemotleft"} {...others} />);
}

export default Component;
