import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j5_sp-b6q.css';

const viewBox = {"width":640,"height":512};
const content = `<path class="j5_sp-b6q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:balance-scale"} {...others} />);
}

export default Component;
