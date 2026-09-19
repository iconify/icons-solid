import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/llbqrh8ag.css';

const viewBox = {"width":640,"height":512};
const content = `<path class="llbqrh8ag"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:wifi"} {...others} />);
}

export default Component;
