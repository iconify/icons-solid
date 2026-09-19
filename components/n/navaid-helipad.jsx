import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wnor2ib4h.css';
import '../../css/s/svdy80z7e.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="wnor2ib4h"/><path class="svdy80z7e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:navaid-helipad"} {...others} />);
}

export default Component;
