import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o5wf9mbzr.css';
import '../../css/o/o0r6dnbfp.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="o5wf9mbzr"/><path class="o0r6dnbfp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:pe-1x1"} {...others} />);
}

export default Component;
