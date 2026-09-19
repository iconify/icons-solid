import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zjdjl4z7l.css';

const viewBox = {"width":1536,"height":1536};
const content = `<path class="zjdjl4z7l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:stop-circle"} {...others} />);
}

export default Component;
