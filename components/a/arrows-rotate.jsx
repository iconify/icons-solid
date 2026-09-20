import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vjuz5xywi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vjuz5xywi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"meteor-icons:arrows-rotate"} {...others} />);
}

export default Component;
