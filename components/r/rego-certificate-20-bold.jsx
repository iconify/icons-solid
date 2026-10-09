import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dyrr1ab6u.css';
import '../../css/j/jz6o0pbsq.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="dyrr1ab6u"/><path class="jz6o0pbsq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:rego-certificate-20-bold"} {...others} />);
}

export default Component;
