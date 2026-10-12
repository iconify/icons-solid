import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jg1u9hc7t.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="jg1u9hc7t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:receipt-euro-filled"} {...others} />);
}

export default Component;
