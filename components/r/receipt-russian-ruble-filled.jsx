import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ir0ltxjco.css';
import '../../css/c/c-llp8bmv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ir0ltxjco"/><path clip-rule="evenodd" class="c-llp8bmv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:receipt-russian-ruble-filled"} {...others} />);
}

export default Component;
