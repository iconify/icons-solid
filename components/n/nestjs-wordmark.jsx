import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pmw9lxb9g.css';
import '../../css/n/n8mc1xbqp.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="pmw9lxb9g"/><path class="n8mc1xbqp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon-plain:nestjs-wordmark"} {...others} />);
}

export default Component;
