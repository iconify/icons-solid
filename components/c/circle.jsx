import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x9o2i1oac.css';

const viewBox = {"width":32,"height":32};
const content = `<circle class="x9o2i1oac"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"formkit:circle"} {...others} />);
}

export default Component;
