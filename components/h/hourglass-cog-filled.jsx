import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sa0f-6aya.css';
import '../../css/l/l6ma61byl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sa0f-6aya"/><path clip-rule="evenodd" class="l6ma61byl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:hourglass-cog-filled"} {...others} />);
}

export default Component;
