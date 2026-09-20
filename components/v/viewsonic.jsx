import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hi6fgjbjc.css';

const viewBox = {"width":200.575,"height":32.571};
const content = `<path class="hi6fgjbjc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:viewsonic"} {...others} />);
}

export default Component;
