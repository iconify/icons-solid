import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r2dlt5bbm.css';
import '../../css/r/ruf7_zb1o.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="r2dlt5bbm"/><path class="ruf7_zb1o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:metadata-remote"} {...others} />);
}

export default Component;
