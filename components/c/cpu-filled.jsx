import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e3jnswbyn.css';
import '../../css/n/n3b-hhblt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="e3jnswbyn"/><path clip-rule="evenodd" class="n3b-hhblt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:cpu-filled"} {...others} />);
}

export default Component;
