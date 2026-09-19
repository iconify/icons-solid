import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v-k5ynfvo.css';

const viewBox = {"width":1000,"height":1000};
const content = `<path class="v-k5ynfvo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"brandico:facebook-rect"} {...others} />);
}

export default Component;
