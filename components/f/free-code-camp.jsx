import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/byi38ackq.css';

const viewBox = {"width":2304,"height":1600};
const content = `<path class="byi38ackq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:free-code-camp"} {...others} />);
}

export default Component;
