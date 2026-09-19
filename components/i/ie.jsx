import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/suwwvuq3n.css';

const viewBox = {"width":944,"height":1000};
const content = `<path class="suwwvuq3n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontelico:ie"} {...others} />);
}

export default Component;
