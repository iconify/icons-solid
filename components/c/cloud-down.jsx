import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j5-1zsbga.css';

const viewBox = {"width":22,"height":22};
const content = `<path class="j5-1zsbga"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"memory:cloud-down"} {...others} />);
}

export default Component;
