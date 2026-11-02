import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kq0s4iban.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kq0s4iban"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:ice-cream-2-line"} {...others} />);
}

export default Component;
