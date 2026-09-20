import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a-h6xzd9o.css';

const viewBox = {"width":22,"height":22};
const content = `<path class="a-h6xzd9o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"memory:box-light-vertical-left-stipple-up-left"} {...others} />);
}

export default Component;
