import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cod50bpfv.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="cod50bpfv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:outline-ltr"} {...others} />);
}

export default Component;
