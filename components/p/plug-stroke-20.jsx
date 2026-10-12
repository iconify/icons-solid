import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hawd1sbrw.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="hawd1sbrw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:plug-stroke-20"} {...others} />);
}

export default Component;
