import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bqp2ybc7i.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="bqp2ybc7i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:mobile-outline"} {...others} />);
}

export default Component;
