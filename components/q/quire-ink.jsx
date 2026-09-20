import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jkufbknyv.css';
import '../../css/m/mb2o3qbdg.css';
import '../../css/g/g1jdu73ab.css';
import '../../css/e/eentqmb8a.css';
import '../../css/p/pq5g1621a.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="jkufbknyv"/><path class="mb2o3qbdg"/><path class="g1jdu73ab"/><path class="eentqmb8a"/><path class="pq5g1621a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:quire-ink"} {...others} />);
}

export default Component;
