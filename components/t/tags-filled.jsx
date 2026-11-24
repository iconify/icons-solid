import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d3is4ubde.css';
import '../../css/z/z283bdcgy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="d3is4ubde"/><path clip-rule="evenodd" class="z283bdcgy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:tags-filled"} {...others} />);
}

export default Component;
