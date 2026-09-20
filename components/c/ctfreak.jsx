import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/phezrpb0j.css';
import '../../css/r/rbhs_9jqq.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="phezrpb0j"/><path class="rbhs_9jqq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:ctfreak"} {...others} />);
}

export default Component;
