import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q36h1kl5c.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="q36h1kl5c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:peer-calls-dark"} {...others} />);
}

export default Component;
