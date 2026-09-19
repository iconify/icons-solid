import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aaw-asy7l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="aaw-asy7l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxs-mouse-alt"} {...others} />);
}

export default Component;
