import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xlcb74b2i.css';
import '../../css/n/nlxy_dbcm.css';
import '../../css/m/moq4ohbbo.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="xlcb74b2i"/><path class="nlxy_dbcm"/><path class="moq4ohbbo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:kometa"} {...others} />);
}

export default Component;
