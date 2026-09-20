import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bo8ctyb6r.css';

const viewBox = {"width":8,"height":8};
const content = `<path class="bo8ctyb6r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"picon:hourglass7"} {...others} />);
}

export default Component;
