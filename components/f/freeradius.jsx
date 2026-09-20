import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f9jd4lb3h.css';
import '../../css/q/qx2necw3z.css';
import '../../css/f/fifs5bbjv.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="f9jd4lb3h"/><circle class="qx2necw3z"/><path class="fifs5bbjv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:freeradius"} {...others} />);
}

export default Component;
