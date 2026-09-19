import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ce5e-7uxo.css';
import '../../css/g/gkgbpvxpf.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ce5e-7uxo"/><path class="gkgbpvxpf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:md-construct"} {...others} />);
}

export default Component;
