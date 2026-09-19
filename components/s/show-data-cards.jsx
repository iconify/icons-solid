import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dwzq6cb0f.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="dwzq6cb0f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:show-data-cards"} {...others} />);
}

export default Component;
