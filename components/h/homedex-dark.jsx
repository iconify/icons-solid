import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x0aj4mq7p.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="x0aj4mq7p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:homedex-dark"} {...others} />);
}

export default Component;
