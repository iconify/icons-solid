import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e_p2cdafc.css';
import '../../css/l/lbnij82qw.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="e_p2cdafc"/><path class="lbnij82qw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:fhem-dark"} {...others} />);
}

export default Component;
