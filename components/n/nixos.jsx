import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/awwetebdu.css';
import '../../css/p/pyttu4r7k.css';

const viewBox = {"width":128,"height":128};
const content = `<path clip-rule="evenodd" class="awwetebdu"/><path clip-rule="evenodd" class="pyttu4r7k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon-plain:nixos"} {...others} />);
}

export default Component;
