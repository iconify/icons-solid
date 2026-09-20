import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h8i-_-z1b.css';

const viewBox = {"width":22,"height":22};
const content = `<path class="h8i-_-z1b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"memory:volume-medium"} {...others} />);
}

export default Component;
