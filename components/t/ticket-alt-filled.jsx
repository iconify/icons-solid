import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g1q3vjbtr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="g1q3vjbtr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:ticket-alt-filled"} {...others} />);
}

export default Component;
