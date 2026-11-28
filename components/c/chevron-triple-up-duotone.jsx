import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q-3k0obzz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="primary q-3k0obzz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:chevron-triple-up-duotone"} {...others} />);
}

export default Component;
