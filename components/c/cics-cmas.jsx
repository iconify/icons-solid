import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/djwm78b0h.css';
import '../../css/g/gbgrvybzj.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="djwm78b0h"/><path class="gbgrvybzj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:cics-cmas"} {...others} />);
}

export default Component;
