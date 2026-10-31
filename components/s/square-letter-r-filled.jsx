import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tu-yry1nz.css';
import '../../css/x/x92eckbjg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tu-yry1nz"/><path clip-rule="evenodd" class="x92eckbjg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:square-letter-r-filled"} {...others} />);
}

export default Component;
