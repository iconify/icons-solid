import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yenqbtb5g.css';
import '../../css/g/ge98ujwjz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yenqbtb5g"/><path class="ge98ujwjz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:user-round-minus-filled"} {...others} />);
}

export default Component;
