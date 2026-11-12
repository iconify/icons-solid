import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p3gookywi.css';
import '../../css/m/m80s_bbww.css';
import '../../css/e/e84rycour.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="p3gookywi"/><path class="m80s_bbww"/><path class="e84rycour"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:microsoft-defender-dark"} {...others} />);
}

export default Component;
