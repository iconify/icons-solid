import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h9ln5obuc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h9ln5obuc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:face-smile-round"} {...others} />);
}

export default Component;
