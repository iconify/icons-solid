import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ue-h57b2y.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ue-h57b2y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:image-ai-filled"} {...others} />);
}

export default Component;
