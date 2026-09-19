import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h89pxybiq.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="h89pxybiq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:inverted-dice-4"} {...others} />);
}

export default Component;
