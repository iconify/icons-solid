import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bv2lx-mpg.css';

const viewBox = {"width":22,"height":22};
const content = `<path class="bv2lx-mpg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"memory:box-light-vertical-right-stipple-left"} {...others} />);
}

export default Component;
