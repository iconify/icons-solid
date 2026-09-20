import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t7xrhg4uz.css';

const viewBox = {"width":22,"height":22};
const content = `<path class="t7xrhg4uz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"memory:rotate-clockwise"} {...others} />);
}

export default Component;
