import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pl8_zgbvz.css';
import '../../css/o/o5nyr_biv.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="pl8_zgbvz"/><path class="o5nyr_biv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:hand-platter-filled"} {...others} />);
}

export default Component;
