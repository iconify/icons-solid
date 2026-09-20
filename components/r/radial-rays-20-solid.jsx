import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h9--2esxi.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="h9--2esxi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"sidekickicons:radial-rays-20-solid"} {...others} />);
}

export default Component;
