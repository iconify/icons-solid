import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n69q8ac2k.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n69q8ac2k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:wifi-1-filled"} {...others} />);
}

export default Component;
