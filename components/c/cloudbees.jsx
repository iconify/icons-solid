import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ek5vy5bfx.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ek5vy5bfx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cib:cloudbees"} {...others} />);
}

export default Component;
