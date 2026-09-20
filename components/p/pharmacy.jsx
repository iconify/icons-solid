import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g5_g_9b5v.css';

const viewBox = {"width":50,"height":50};
const content = `<path class="g5_g_9b5v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"temaki:pharmacy"} {...others} />);
}

export default Component;
