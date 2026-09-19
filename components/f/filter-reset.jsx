import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uszyinm-l.css';
import '../../css/e/evom4wbsm.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="uszyinm-l"/><path class="evom4wbsm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:filter-reset"} {...others} />);
}

export default Component;
