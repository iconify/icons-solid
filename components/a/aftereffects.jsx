import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n0cuc_bpo.css';
import '../../css/h/h-ofk3o6j.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="n0cuc_bpo"/><path class="h-ofk3o6j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon-plain:aftereffects"} {...others} />);
}

export default Component;
