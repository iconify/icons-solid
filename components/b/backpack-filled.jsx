import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2huzkbqd.css';
import '../../css/u/uijt22b7u.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="k2huzkbqd"/><path class="uijt22b7u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:backpack-filled"} {...others} />);
}

export default Component;
