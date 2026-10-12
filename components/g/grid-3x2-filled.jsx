import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pxu8jsb5j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pxu8jsb5j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:grid-3x2-filled"} {...others} />);
}

export default Component;
