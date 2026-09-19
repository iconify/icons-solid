import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b19ec7c9y.css';

const viewBox = {"width":640,"height":512};
const content = `<path class="b19ec7c9y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:bell-slash"} {...others} />);
}

export default Component;
