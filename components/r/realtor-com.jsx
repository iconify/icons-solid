import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z00tr3bse.css';
import '../../css/i/i8n-k03nl.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="z00tr3bse"/><path class="i8n-k03nl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:realtor-com"} {...others} />);
}

export default Component;
