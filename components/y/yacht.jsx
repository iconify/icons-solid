import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hcwmn2dil.css';
import '../../css/r/rrczhp0ig.css';
import '../../css/b/b3q-odbhn.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="hcwmn2dil"/><path class="rrczhp0ig"/><path class="b3q-odbhn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:yacht"} {...others} />);
}

export default Component;
