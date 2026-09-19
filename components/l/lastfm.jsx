import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q_unyib1z.css';

const viewBox = {"width":994.95,"height":1000};
const content = `<path class="q_unyib1z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"brandico:lastfm"} {...others} />);
}

export default Component;
