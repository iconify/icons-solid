import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qle1habfw.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="qle1habfw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:square-arrow-down-filled"} {...others} />);
}

export default Component;
