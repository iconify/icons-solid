import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hzv03fbgv.css';
import '../../css/k/kid6f5maa.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hzv03fbgv"/><path class="kid6f5maa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:dog-body-filled"} {...others} />);
}

export default Component;
