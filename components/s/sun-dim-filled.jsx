import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q-vkei2jb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q-vkei2jb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:sun-dim-filled"} {...others} />);
}

export default Component;
