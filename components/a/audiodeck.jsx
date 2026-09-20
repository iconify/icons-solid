import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/exvj5hvyn.css';
import '../../css/s/sdgx1tzay.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="exvj5hvyn"/><path class="sdgx1tzay"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:audiodeck"} {...others} />);
}

export default Component;
