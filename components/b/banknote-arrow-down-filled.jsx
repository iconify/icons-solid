import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/ksderlvfw.css';
import '../../css/a/a08-prbmm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ksderlvfw"/><path clip-rule="evenodd" class="a08-prbmm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:banknote-arrow-down-filled"} {...others} />);
}

export default Component;
