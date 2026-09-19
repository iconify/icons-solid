import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hmvj3rb8q.css';

const viewBox = {"width":640,"height":512};
const content = `<path class="hmvj3rb8q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-solid:cloud-arrow-down"} {...others} />);
}

export default Component;
