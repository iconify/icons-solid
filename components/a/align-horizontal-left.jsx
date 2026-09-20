import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z_a1hrbqt.css';

const viewBox = {"width":22,"height":22};
const content = `<path class="z_a1hrbqt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"memory:align-horizontal-left"} {...others} />);
}

export default Component;
