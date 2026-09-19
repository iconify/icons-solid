import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ln8kehb4v.css';
import '../../css/h/hz4g9vbsl.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ln8kehb4v"/><path class="hz4g9vbsl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:user-speaker"} {...others} />);
}

export default Component;
