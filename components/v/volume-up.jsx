import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j35eaocdf.css';
import '../../css/d/d3ppxtb2e.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="j35eaocdf"/><path class="d3ppxtb2e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:volume-up"} {...others} />);
}

export default Component;
