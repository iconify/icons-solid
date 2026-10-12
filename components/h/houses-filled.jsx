import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b9x3p0-sd.css';
import '../../css/k/k58cg2bra.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="b9x3p0-sd"/><path class="k58cg2bra"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:houses-filled"} {...others} />);
}

export default Component;
