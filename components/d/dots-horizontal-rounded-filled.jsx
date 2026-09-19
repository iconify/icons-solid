import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fpdd8_pnz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fpdd8_pnz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:dots-horizontal-rounded-filled"} {...others} />);
}

export default Component;
