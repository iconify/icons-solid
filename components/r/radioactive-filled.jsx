import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p-0s1znnl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="p-0s1znnl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:radioactive-filled"} {...others} />);
}

export default Component;
