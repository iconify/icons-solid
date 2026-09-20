import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r42rcsbfo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="r42rcsbfo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:hexagon-number-3-filled"} {...others} />);
}

export default Component;
