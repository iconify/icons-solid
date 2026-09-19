import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ogv16_bqf.css';
import '../../css/d/djjdvpbpm.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ogv16_bqf"/><path class="djjdvpbpm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:buoy"} {...others} />);
}

export default Component;
