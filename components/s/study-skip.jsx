import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pvoqjmboh.css';
import '../../css/j/jdpi5byld.css';
import '../../css/m/mznjhlbhj.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="pvoqjmboh"/><path class="jdpi5byld"/><path class="mznjhlbhj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:study-skip"} {...others} />);
}

export default Component;
