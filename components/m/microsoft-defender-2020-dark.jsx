import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v5275jbym.css';
import '../../css/u/ugqbnn6ht.css';
import '../../css/j/ji04dtbnw.css';
import '../../css/m/mbpv4bb_t.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="v5275jbym"/><path class="ugqbnn6ht"/><path class="ji04dtbnw"/><path class="mbpv4bb_t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:microsoft-defender-2020-dark"} {...others} />);
}

export default Component;
