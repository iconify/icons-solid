import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zptjmc6mm.css';
import '../../css/v/vb6m8wb7i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zptjmc6mm"/><path class="vb6m8wb7i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:heart-x-filled"} {...others} />);
}

export default Component;
