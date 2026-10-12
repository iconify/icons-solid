import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yc8gq2dqn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yc8gq2dqn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:git-compare-filled"} {...others} />);
}

export default Component;
