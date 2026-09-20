import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jpj6bjbvs.css';
import '../../css/q/qho3_abub.css';
import '../../css/d/dyb1gzb0x.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jpj6bjbvs"/><path class="qho3_abub"/><path class="dyb1gzb0x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:paxg"} {...others} />);
}

export default Component;
