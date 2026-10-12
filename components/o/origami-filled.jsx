import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aaa656bqn.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="aaa656bqn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:origami-filled"} {...others} />);
}

export default Component;
