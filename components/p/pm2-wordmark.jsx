import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c8cdc8b8v.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="c8cdc8b8v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon-plain:pm2-wordmark"} {...others} />);
}

export default Component;
