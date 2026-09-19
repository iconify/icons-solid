import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/ho0wmrbwp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ho0wmrbwp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:day-sunny"} {...others} />);
}

export default Component;
