import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q2nrf10bf.css';
import '../../css/t/tog5dqb5v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q2nrf10bf"/><path class="tog5dqb5v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:folder-pen-bold-duotone"} {...others} />);
}

export default Component;
