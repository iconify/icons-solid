import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/por8_p__f.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="por8_p__f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:bus-alt"} {...others} />);
}

export default Component;
