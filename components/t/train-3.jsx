import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tqxfm3x3o.css';
import '../../css/r/rwuxsc6cx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tqxfm3x3o"/><path class="rwuxsc6cx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:train-3"} {...others} />);
}

export default Component;
