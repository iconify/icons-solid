import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ac0nmw1ig.css';
import '../../css/a/alo-6-b8f.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ac0nmw1ig"/><path class="alo-6-b8f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:hand-coins-filled"} {...others} />);
}

export default Component;
