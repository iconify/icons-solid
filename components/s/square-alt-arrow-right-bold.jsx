import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nd6bosi-b.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="nd6bosi-b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:square-alt-arrow-right-bold"} {...others} />);
}

export default Component;
