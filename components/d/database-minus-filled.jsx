import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qz33mwttk.css';
import '../../css/g/ge98ujwjz.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="qz33mwttk"/><path class="ge98ujwjz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:database-minus-filled"} {...others} />);
}

export default Component;
