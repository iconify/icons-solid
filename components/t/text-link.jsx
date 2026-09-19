import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xe4vwfu9e.css';
import '../../css/d/d8r3yjb_b.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="xe4vwfu9e"/><path class="d8r3yjb_b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:text-link"} {...others} />);
}

export default Component;
