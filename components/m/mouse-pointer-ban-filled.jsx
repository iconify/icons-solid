import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/juq__jbid.css';
import '../../css/j/jkbt_jb8v.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="juq__jbid"/><path class="jkbt_jb8v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:mouse-pointer-ban-filled"} {...others} />);
}

export default Component;
