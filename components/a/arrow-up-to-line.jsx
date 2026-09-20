import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h4787ac0r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h4787ac0r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:arrow-up-to-line"} {...others} />);
}

export default Component;
