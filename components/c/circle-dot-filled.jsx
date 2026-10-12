import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b39lfgb6m.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="b39lfgb6m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:circle-dot-filled"} {...others} />);
}

export default Component;
