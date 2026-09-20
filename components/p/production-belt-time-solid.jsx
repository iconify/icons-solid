import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1vw-3t3t.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="n1vw-3t3t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:production-belt-time-solid"} {...others} />);
}

export default Component;
