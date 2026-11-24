import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xvyg7g7cd.css';
import '../../css/s/s-t14rbvu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xvyg7g7cd"/><path clip-rule="evenodd" class="s-t14rbvu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:rocket-filled"} {...others} />);
}

export default Component;
