import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tr0d2hbau.css';
import '../../css/m/myu93rbrt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tr0d2hbau"/><path class="myu93rbrt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:prawn-filled"} {...others} />);
}

export default Component;
