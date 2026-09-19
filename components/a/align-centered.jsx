import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h1yw06b1q.css';

const viewBox = {"width":384,"height":448};
const content = `<path class="h1yw06b1q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:align-centered"} {...others} />);
}

export default Component;
