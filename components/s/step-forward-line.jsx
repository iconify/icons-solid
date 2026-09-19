import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a8k_ne4ni.css';
import '../../css/j/j9v9tkbrj.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};
const content = `<path class="a8k_ne4ni clr-i-outline clr-i-outline-path-1"/><path class="clr-i-outline clr-i-outline-path-2 j9v9tkbrj"/><path class="m2o3sh-9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:step-forward-line"} {...others} />);
}

export default Component;
