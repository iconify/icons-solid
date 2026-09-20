import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z82ysocfk.css';
import '../../css/h/h0h1ev4io.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="z82ysocfk"/><path class="h0h1ev4io"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:kilt"} {...others} />);
}

export default Component;
