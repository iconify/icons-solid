import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b3c-5acjg.css';
import '../../css/g/g5wxtpvfn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="b3c-5acjg"/><path class="g5wxtpvfn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:layers-arrow-down-filled"} {...others} />);
}

export default Component;
