import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fi92mggmg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fi92mggmg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:git-pull-request-fill-round"} {...others} />);
}

export default Component;
