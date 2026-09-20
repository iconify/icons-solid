import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dcneon1wc.css';
import '../../css/f/fdawbm_9g.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="dcneon1wc"/><path class="fdawbm_9g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:bath-solid"} {...others} />);
}

export default Component;
