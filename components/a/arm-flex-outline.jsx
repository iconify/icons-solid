import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jkjw81bky.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jkjw81bky"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:arm-flex-outline"} {...others} />);
}

export default Component;
