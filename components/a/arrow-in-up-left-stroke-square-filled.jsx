import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l_-go266m.css';
import '../../css/q/q-jo2hc6u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l_-go266m"/><path class="q-jo2hc6u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:arrow-in-up-left-stroke-square-filled"} {...others} />);
}

export default Component;
