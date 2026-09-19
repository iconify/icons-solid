import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i72vq7bjp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i72vq7bjp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:git-pull-request"} {...others} />);
}

export default Component;
