import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c2a0f5bgc.css';
import '../../css/m/mao0_zbko.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="c2a0f5bgc"/><path class="mao0_zbko"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:circle-bottom-up-bold"} {...others} />);
}

export default Component;
