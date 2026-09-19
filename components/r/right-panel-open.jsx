import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n-3s-3ndv.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="n-3s-3ndv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:right-panel-open"} {...others} />);
}

export default Component;
