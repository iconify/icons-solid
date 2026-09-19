import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p3blcd3de.css';

const viewBox = {"width":1920,"height":1280};
const content = `<path class="p3blcd3de"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:eraser"} {...others} />);
}

export default Component;
