import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/czwmjhe3n.css';
import '../../css/o/obc680b2p.css';

const viewBox = {"width":32,"height":32};
const content = `<circle class="czwmjhe3n"/><path class="obc680b2p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:navaid-vortac"} {...others} />);
}

export default Component;
