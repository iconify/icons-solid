import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/md_a79lck.css';
import '../../css/d/dwubu5bir.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="md_a79lck"/><path class="dwubu5bir"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:jinear"} {...others} />);
}

export default Component;
