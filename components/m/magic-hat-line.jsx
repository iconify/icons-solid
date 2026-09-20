import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f9k1dtb8p.css';
import '../../css/s/sn4crhb1z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="f9k1dtb8p"/><path clip-rule="evenodd" class="sn4crhb1z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:magic-hat-line"} {...others} />);
}

export default Component;
