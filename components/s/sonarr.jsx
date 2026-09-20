import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qeb7o8bgl.css';
import '../../css/p/phq-p1_xp.css';
import '../../css/t/t12_olc7x.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="qeb7o8bgl"/><path class="phq-p1_xp"/><path class="t12_olc7x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:sonarr"} {...others} />);
}

export default Component;
