import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u0gt8jwce.css';

const viewBox = {"width":1025,"height":1024};
const content = `<path class="u0gt8jwce"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:servers"} {...others} />);
}

export default Component;
