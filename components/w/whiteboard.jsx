import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m2srrkj6b.css';

const viewBox = {"width":1792,"height":1792};
const content = `<path class="m2srrkj6b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vs:whiteboard"} {...others} />);
}

export default Component;
