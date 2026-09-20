import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pis88xbuv.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="pis88xbuv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:flip-vertical-circle-1"} {...others} />);
}

export default Component;
