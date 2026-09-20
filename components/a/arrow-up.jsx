import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrqn5eb9m.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="nrqn5eb9m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"simple-line-icons:arrow-up"} {...others} />);
}

export default Component;
