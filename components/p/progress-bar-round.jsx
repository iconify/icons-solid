import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ixz9bpndl.css';
import '../../css/b/bqehyh14p.css';
import '../../css/s/svdy80z7e.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ixz9bpndl"/><path class="bqehyh14p"/><path class="svdy80z7e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:progress-bar-round"} {...others} />);
}

export default Component;
