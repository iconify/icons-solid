import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k1p4-imiy.css';
import '../../css/f/fbmp7wgwj.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="k1p4-imiy"/><path class="fbmp7wgwj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:user-clock"} {...others} />);
}

export default Component;
