import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q6s8dqh1t.css';

const viewBox = {"width":897,"height":1025};
const content = `<path class="q6s8dqh1t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:lipstick"} {...others} />);
}

export default Component;
