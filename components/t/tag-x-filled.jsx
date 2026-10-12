import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cp6t2zbys.css';
import '../../css/l/le77-ub7e.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="cp6t2zbys"/><path class="le77-ub7e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:tag-x-filled"} {...others} />);
}

export default Component;
