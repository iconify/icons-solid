import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jkufbknyv.css';
import '../../css/s/s7hlo9zxp.css';
import '../../css/g/gbfxncsks.css';
import '../../css/e/eentqmb8a.css';
import '../../css/f/f9ffv5bes.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="jkufbknyv"/><path class="s7hlo9zxp"/><path class="gbfxncsks"/><path class="eentqmb8a"/><path class="f9ffv5bes"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:quire-ink"} {...others} />);
}

export default Component;
