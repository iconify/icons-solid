import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sb7z8wwtr.css';
import '../../css/r/rututhb5h.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="sb7z8wwtr"/><path class="rututhb5h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:task-approved"} {...others} />);
}

export default Component;
