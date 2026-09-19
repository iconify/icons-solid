import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fj98ueone.css';
import '../../css/t/t95d9j63b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fj98ueone"/><path class="t95d9j63b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bx-left-down-arrow-circle"} {...others} />);
}

export default Component;
