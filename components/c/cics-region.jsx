import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w8hewfc3o.css';
import '../../css/b/b_p-ebbmt.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="w8hewfc3o"/><path class="b_p-ebbmt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:cics-region"} {...others} />);
}

export default Component;
