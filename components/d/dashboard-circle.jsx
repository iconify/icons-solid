import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xa4bx0bxm.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="xa4bx0bxm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:dashboard-circle"} {...others} />);
}

export default Component;
