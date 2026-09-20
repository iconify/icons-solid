import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v97ouibln.css';
import '../../css/w/wyn_vbbql.css';
import '../../css/p/pi1ial8rd.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="v97ouibln"/><path class="wyn_vbbql"/><path class="pi1ial8rd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"roentgen:tube-siren-left-siren-right"} {...others} />);
}

export default Component;
