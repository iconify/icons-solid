import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xzbzq9bdn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xzbzq9bdn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:timer-gloss"} {...others} />);
}

export default Component;
