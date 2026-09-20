import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eh53vfb9m.css';

const viewBox = {"width":8,"height":8};
const content = `<path class="eh53vfb9m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"picon:hourglass5"} {...others} />);
}

export default Component;
