import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n_ep0bbhk.css';

const viewBox = {"width":50,"height":50};
const content = `<path class="n_ep0bbhk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"map:sheild"} {...others} />);
}

export default Component;
