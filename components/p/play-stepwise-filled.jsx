import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cvfgo8b0x.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="cvfgo8b0x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:play-stepwise-filled"} {...others} />);
}

export default Component;
