import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rhwetz1ra.css';
import '../../css/x/xrvh-kbwe.css';
import '../../css/u/u3rfhw5gk.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="rhwetz1ra"/><path class="xrvh-kbwe"/><path class="u3rfhw5gk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:calico-dark"} {...others} />);
}

export default Component;
