import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g277awvop.css';
import '../../css/x/x00tm8b5y.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="g277awvop"/><path class="x00tm8b5y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:prism-20"} {...others} />);
}

export default Component;
