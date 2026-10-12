import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dc9t6kiho.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="dc9t6kiho"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:paragraph-20"} {...others} />);
}

export default Component;
