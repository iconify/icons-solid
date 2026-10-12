import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lg86vcuii.css';
import '../../css/c/c-xbtmutf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lg86vcuii"/><path clip-rule="evenodd" class="c-xbtmutf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:germ-filled"} {...others} />);
}

export default Component;
