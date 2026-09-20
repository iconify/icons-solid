import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zx8ai4b8y.css';

const viewBox = {"width":22,"height":22};
const content = `<path class="zx8ai4b8y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"memory:box-outer-light-left-right-stipple"} {...others} />);
}

export default Component;
