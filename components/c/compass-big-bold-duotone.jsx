import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kn-nc5ohr.css';
import '../../css/z/z5mu4-byh.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="kn-nc5ohr"/><path class="z5mu4-byh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:compass-big-bold-duotone"} {...others} />);
}

export default Component;
