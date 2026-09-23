import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fjoxk1bjv.css';
import '../../css/t/t4mbssbth.css';
import '../../css/a/ashcbkuqe.css';
import '../../css/o/o-lh9hk2w.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="fjoxk1bjv"/><path class="t4mbssbth"/><path class="ashcbkuqe"/><path class="o-lh9hk2w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:cetusguard"} {...others} />);
}

export default Component;
