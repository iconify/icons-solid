import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zh9mnbc-e.css';
import '../../css/g/gibdywb2h.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="zh9mnbc-e"/><path class="gibdywb2h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:credentials"} {...others} />);
}

export default Component;
