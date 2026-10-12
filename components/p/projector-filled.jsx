import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c6vzrquwp.css';
import '../../css/k/k_0sx3bjc.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="c6vzrquwp"/><path class="k_0sx3bjc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:projector-filled"} {...others} />);
}

export default Component;
