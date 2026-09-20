import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2manjamt.css';

const viewBox = {"width":22,"height":22};
const content = `<path class="k2manjamt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"memory:table-top-spiral-stairs-left"} {...others} />);
}

export default Component;
