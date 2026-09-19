import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c2zq-9byz.css';

const viewBox = {"width":640,"height":512};
const content = `<path class="c2zq-9byz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:door-closed"} {...others} />);
}

export default Component;
