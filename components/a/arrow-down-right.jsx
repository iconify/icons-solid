import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l-be4tb1z.css';
import '../../css/f/fijx44bhr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l-be4tb1z wm-k"/><path class="fijx44bhr wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:arrow-down-right"} {...others} />);
}

export default Component;
