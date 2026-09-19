import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nk68ltbne.css';
import '../../css/a/a0xb5cbaa.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="nk68ltbne"/><path class="a0xb5cbaa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"foundation:checkbox"} {...others} />);
}

export default Component;
