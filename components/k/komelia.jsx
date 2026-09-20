import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/usv905b_v.css';
import '../../css/t/tnhvtrfme.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="usv905b_v"/><path class="tnhvtrfme"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:komelia"} {...others} />);
}

export default Component;
