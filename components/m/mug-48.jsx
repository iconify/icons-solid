import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d4kijcj5b.css';
import '../../css/t/tea15-vcx.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="d4kijcj5b"/><path class="tea15-vcx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:mug-48"} {...others} />);
}

export default Component;
