import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s28o16g0n.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="s28o16g0n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:cherryalt"} {...others} />);
}

export default Component;
