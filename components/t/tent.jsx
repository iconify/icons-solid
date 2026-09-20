import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nd3iv7bau.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nd3iv7bau"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:tent"} {...others} />);
}

export default Component;
