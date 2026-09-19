import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h-_fu0bnp.css';

const viewBox = {"width":1792,"height":1536};
const content = `<path class="h-_fu0bnp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:heartbeat"} {...others} />);
}

export default Component;
