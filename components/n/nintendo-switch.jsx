import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i9kk7xjgz.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="i9kk7xjgz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dinkie-icons:nintendo-switch"} {...others} />);
}

export default Component;
