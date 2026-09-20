import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/ziyt1r3lp.css';
import '../../css/w/wel9mzd3v.css';
import '../../css/l/lw5zwnyrs.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ziyt1r3lp"/><path class="wel9mzd3v"/><path class="lw5zwnyrs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:sunwet"} {...others} />);
}

export default Component;
