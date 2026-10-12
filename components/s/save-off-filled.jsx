import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xxm7zcclr.css';
import '../../css/s/sk2-r8bwj.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="xxm7zcclr"/><path class="sk2-r8bwj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:save-off-filled"} {...others} />);
}

export default Component;
