import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u1b9jcbak.css';
import '../../css/n/nywwhyjhu.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="u1b9jcbak"/><path class="nywwhyjhu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon-plain:argocd"} {...others} />);
}

export default Component;
