import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lc6h766dc.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="lc6h766dc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:swarmpit-dark"} {...others} />);
}

export default Component;
