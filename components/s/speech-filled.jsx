import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cu9cqub2t.css';
import '../../css/u/uusba_vxu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cu9cqub2t"/><path class="uusba_vxu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:speech-filled"} {...others} />);
}

export default Component;
