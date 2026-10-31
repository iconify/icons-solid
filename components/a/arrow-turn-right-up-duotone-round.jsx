import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/juufe7eyi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="juufe7eyi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:arrow-turn-right-up-duotone-round"} {...others} />);
}

export default Component;
