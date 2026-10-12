import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z32nf-brq.css';
import '../../css/h/h48_73b8g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="z32nf-brq"/><path clip-rule="evenodd" class="h48_73b8g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:tractor-filled"} {...others} />);
}

export default Component;
